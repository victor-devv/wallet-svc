import { injectable, inject } from 'inversify';
import { isValid as isULID } from 'ulidx';
import { Knex } from 'knex';
import { TYPES } from '@app/common/config/ioc/types';
import {
  WalletNotFoundError,
  ActionNotAllowedError,
  SameWalletError,
  FrozenWalletError,
  InsufficientFundsError
} from '@app/server/controllers/base';
import { ModelNotFoundError } from '@app/data/base/errors/repo.errors';
import { Wallet, TransferOptions } from './wallet.model';
import { WalletRepository } from './wallet.repo';
import {
  CreateWalletDTO,
  FundWalletDTO,
  FreezeWalletDTO
} from '@app/server/controllers/wallet/wallet.dto';
import {
  isPhoneNumberValid,
  validNigerianAccountNumber
} from '@app/data/base/constants';
import { WalletDebitType, UNTRACKED_DEBIT_TYPES } from './wallet.constants';

@injectable()
export class WalletService {
  constructor(@inject(TYPES.WalletRepository) private repo: WalletRepository) {}

  /**
   * Returns a Knex query object that can be used for getting an existing wallet by either it's ulid, user phone
   * number or user ulid
   * @param id Wallet ulid or user's phone number or user ulid
   */
  walletQuery(id: string | number) {
    const qb = this.repo.qb;
    let query = qb.whereNull('deleted_at');

    if (typeof id === 'string' && isULID(id)) {
      qb.client.raw('?? = ? OR ?? = ?', ['ulid', id, 'user_ulid', id]);
    } else if (typeof id === 'number') {
      query = query.where('user_id', id);
    } else if (isPhoneNumberValid(id)) {
      query = query
        .join('users', 'users.id', 'wallets.user_id')
        .where('users.phone_number', id);
    } else if (validNigerianAccountNumber(id)) {
      query = query.whereRaw(
        'JSON_UNQUOTE(JSON_EXTRACT(??, "$.account.nuban")) = ?',
        ['account', id]
      );
    }

    return query;
  }

  /**
   * Creates a wallet, also creates wallets limits for the account
   * @param req Express request object
   * @param body Request body for creating a wallet
   */
  async createWallet(body: CreateWalletDTO, trx: Knex.Transaction) {
    return await this.repo.create(body, false, trx);
  }

  /**
   * Gets a user's wallet
   * @param id The wallet id or user's phone number or user id
   * @param useWalletError Whether to throw a `WalletNotFoundError` if the wallet does not exist. Defaults to `false` and throws a `ModelNotFoundError` if the wallet is not found
   * @param errorMessage Error message to be used if the wallet does not exist
   */
  async getWallet(id: string, useWalletError = false, errorMessage?: string) {
    if (!id) throw new WalletNotFoundError(errorMessage || id);

    const query = this.walletQuery(id);
    const wallet = await query.first();

    if (wallet) return wallet;
    if (useWalletError) throw new WalletNotFoundError(errorMessage || id);
    throw new ModelNotFoundError(errorMessage || 'Wallet not found');
  }

  async fundWallet(body: FundWalletDTO) {
    try {
      const wallet = await this.creditWallet(body.user, body.amount);

      //Todo: Log transaction
      // const transaction = await TransactionLogger.fund(body, wallet);

      return this.format(wallet);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Credits a wallet with a specified amount.
   * @param id Wallet id or user's phone number or user id
   * @param amount Amount to credit the wallet with
   * @param errorMessage Optional error message to be thrown if the wallet is not found
   */
  async creditWallet(id: string, amount: number) {
    const query = this.walletQuery(id);

    await query.increment({
      balance: amount,
      ledger_balance: amount
    });

    const wallet = await this.walletQuery(id).first();
    if (!wallet) throw new WalletNotFoundError(id);

    if (!wallet.has_funded)
      return await this.walletQuery(id).update({ has_funded: true });

    return wallet;
  }

  /**
   * Debits a specified amount from a wallet
   * @param id Wallet id or user's phone number or user id
   * @param amount Amount to debit from the wallet
   * @param errorMessage Optional error message to be thrown if the wallet is not found
   */
  async debitWallet(id: string, amount: number, errorMessage?: string) {
    const query = this.walletQuery(id)
      .where('balance', '>=', amount)
      .where('ledger_balance', '>=', amount);

    await query.increment({
      balance: -amount,
      ledger_balance: -amount
    });

    const wallet = query.first();
    if (!wallet) throw new WalletNotFoundError(errorMessage || id);

    return wallet;
  }

  /**
   * Freezes or unfreezes a user's wallet
   * @param id Wallet id or user's phone number or user id
   * @param channel User's wallet channel
   */
  freezeOrUnfreezeUserWallet(body: FreezeWalletDTO) {
    const query = this.walletQuery(body.user);
    const is_frozen = body.action === 'freeze' ? true : false;
    query.update({ is_frozen });

    const wallet = query.first();
    return wallet;
  }

  /**
   * Transfers money between wallets
   * @param options Options for the transfer
   */
  async transfer(options: TransferOptions) {
    const { amount, errorMessagePrefix } = options;
    const sender = await this.getWallet(options.sender, true);
    const recipient = await this.getWallet(options.recipient, true);

    if (!amount) throw new ActionNotAllowedError('Amount not specified');
    if (sender.id === recipient.id) throw new SameWalletError();

    await this.validateWalletDebit(
      amount,
      sender,
      errorMessagePrefix,
      'democredit_to_democredit'
    );

    const updatedSender = await this.debitWallet(sender.id, amount);
    const updatedRecipient = await this.creditWallet(recipient.id, amount);
    return { sender: updatedSender, recipient: updatedRecipient };
  }

  /**
   * Validates a wallet debit action and ensures the wallet meets all the conditions for it to be debited.
   * @param amount The amount to be debited
   * @param wallet The wallet to debit
   * @param errorMessagePrefix Prefix string appended to errors thrown from the function
   * @param isTransfer Whether the wallet debit action is a transfer. Defaults to true
   *
   * TODO: change params to an object
   */
  protected async validateWalletDebit(
    amount: number,
    wallet: Wallet,
    errorMessagePrefix: string = 'Unable to complete transfer because',
    transferType: WalletDebitType
  ) {
    if (amount < 0)
      throw new ActionNotAllowedError(
        `${errorMessagePrefix} an invalid amount was provided`
      );

    if (wallet.is_frozen) throw new FrozenWalletError();
    if (wallet.balance < amount || wallet.ledger_balance < amount)
      throw new InsufficientFundsError(errorMessagePrefix);

    // skip validation if the action is a fee debit
    if (UNTRACKED_DEBIT_TYPES.includes(transferType)) return;

    //NOT IMPLEMENTING TRANSACITON LIMITS AND BALANCE LIMITS AS THIS IS A DEMO WALLET
  }

  format(wallet: Wallet): Partial<Wallet> {
    const {
      _id,
      user_id,
      user_ulid,
      has_funded,
      is_verified,
      is_frozen,
      ...rest
    } = wallet;

    return {
      ...rest,
      has_funded: Boolean(has_funded),
      is_verified: Boolean(is_verified),
      is_frozen: Boolean(is_frozen)
    };
  }
}
