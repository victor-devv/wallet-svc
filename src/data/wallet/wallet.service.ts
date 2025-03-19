import { injectable, inject } from 'inversify';
import { Knex } from 'knex';
import { ulid } from 'ulidx';
import { TYPES } from '@app/common/config/ioc/types';
import {
  WalletNotFoundError,
  ActionNotAllowedError,
  SameWalletError,
  FrozenWalletError,
  InsufficientFundsError
} from '@app/server/controllers/base';
import { ModelNotFoundError } from '@app/data/base/errors/repo.errors';
import {
  Wallet,
  TransferOptions,
  WalletRepository,
  WalletDebitType,
  UNTRACKED_DEBIT_TYPES
} from '.';
import {
  CreateWalletDTO,
  FundWalletDTO,
  DebitWalletDTO,
  FreezeWalletDTO
} from '@app/server/controllers/wallet/wallet.dto';
import { CoreWalletRepository, CoreWalletType } from '@app/data/core_wallet';
import { TransactionService } from '@app/data/transaction';

@injectable()
export class WalletService {
  constructor(
    @inject(TYPES.WalletRepository) private repo: WalletRepository,
    @inject(TYPES.CoreWalletRepository)
    private coreWalletRepo: CoreWalletRepository,
    @inject(TYPES.TransactionService)
    private transactionService: TransactionService
  ) {}

  /**
   * Creates a wallet, also creates wallets limits for the account
   * @param req Express request object
   * @param body Request body for creating a wallet
   */
  async createWallet(body: CreateWalletDTO, trx: Knex.Transaction) {
    return await this.repo.create(body, true, trx);
  }

  /**
   * Gets a user's wallet
   * @param id The wallet id or user's phone number or user id
   * @param useWalletError Whether to throw a `WalletNotFoundError` if the wallet does not exist. Defaults to `false` and throws a `ModelNotFoundError` if the wallet is not found
   * @param errorMessage Error message to be used if the wallet does not exist
   */
  async getWallet(
    id: string,
    useWalletError = false,
    errorMessage?: string,
    trx?: Knex.Transaction
  ) {
    if (!id) throw new WalletNotFoundError(errorMessage || id);
    const wallet = await this.repo.walletQuery(id, trx).first();

    if (wallet) return wallet;
    if (useWalletError) throw new WalletNotFoundError(errorMessage || id);
    throw new ModelNotFoundError(errorMessage || 'Wallet not found');
  }

  /**
   * Adds money to a wallet
   * @param body
   */
  async fundWallet(body: FundWalletDTO) {
    try {
      const wallet = await this.repo.creditWallet(body.user, body.amount);

      //Todo: Log transaction
      // const transaction = await TransactionLogger.fund(body, wallet);

      return this.format(wallet);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Transfers money between wallets
   * @param options Options for the transfer
   */
  async transfer(options: TransferOptions, trx?: Knex.Transaction) {
    const { amount, errorMessagePrefix } = options;
    const sender = await this.getWallet(options.sender, true, null, trx);
    const recipient = await this.getWallet(options.recipient, true, null, trx);

    if (!amount) throw new ActionNotAllowedError('Amount not specified');
    if (sender.id === recipient.id) throw new SameWalletError();

    await this.validateWalletDebit(
      amount,
      sender,
      errorMessagePrefix,
      'democredit_to_democredit'
    );

    const updatedSender = await this.repo.debitWallet(
      sender.id,
      amount,
      null,
      trx
    );
    const updatedRecipient = await this.repo.creditWallet(
      recipient.id,
      amount,
      trx
    );
    return { senderWallet: updatedSender, recipientWallet: updatedRecipient };
  }

  async withdraw(body: DebitWalletDTO) {
    const trx = await this.repo.baseKnex.transaction();

    try {
      body.fee = 1000; //charge N10 for withdrawals
      body.from_account = '0000000000';
      body.from_acct_name = 'Direct Debit';

      let wallet = await this.getWallet(body.user.id, true);

      // Validate wallet debit
      await this.validateWalletDebit(
        body.amount + body.fee,
        wallet,
        'Unable to complete withdrawal because',
        'democredit_to_account'
      );

      // credit core tss wallet
      await this.coreWalletRepo.creditCoreWallet({
        type: CoreWalletType.TSS,
        amount: body.amount
      });

      // credit core fee wallet
      await this.coreWalletRepo.creditCoreWallet({
        type: CoreWalletType.FEE,
        amount: body.fee
      });

      // debit user's wallet
      wallet = await this.repo.debitWallet(wallet._id, body.amount + body.fee);

      await this.transactionService.logFeeDirectCreditTransaction(
        body.user,
        wallet,
        body.fee,
        trx
      );

      await this.transactionService.logTssCreditTransaction(
        body.user,
        wallet,
        body.amount,
        body.from_acct_name,
        body.from_account,
        trx
      );

      await this.transactionService.logDirectDebitTransaction(
        body.amount,
        body.from_acct_name,
        body.from_account,
        body.user,
        wallet,
        body.narration,
        `tr_${ulid()}`
      );

      return wallet;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Freezes or unfreezes a user's wallet
   * @param id Wallet id or user's phone number or user id
   * @param channel User's wallet channel
   */
  async freezeOrUnfreezeUserWallet(body: FreezeWalletDTO) {
    const is_frozen = body.action === 'freeze' ? true : false;
    await this.repo.walletQuery(body.user).update({ is_frozen });

    const wallet = await this.repo.walletQuery(body.user).first();
    return this.format(wallet);
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
