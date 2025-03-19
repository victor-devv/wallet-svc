import { injectable } from 'inversify';
import { Knex } from 'knex';
import { isValid as isULID } from 'ulidx';
import { WalletNotFoundError } from '@app/server/controllers/base';
import { BaseRepository } from '../base';
import {
  isPhoneNumberValid,
  validNigerianAccountNumber
} from '@app/data/base/constants';
import { Wallet } from './wallet.model';

@injectable()
export class WalletRepository extends BaseRepository<Wallet> {
  constructor() {
    super('Wallet', 'wallets');
  }

  /**
   * Returns a Knex query object that can be used for getting an existing wallet by either it's ulid, user phone
   * number or user ulid
   * @param id Wallet ulid or user's phone number or user ulid
   */
  walletQuery(id: string | number, trx?: Knex.Transaction) {
    const qb = trx ? trx(this.tableName) : this.qb;
    let query = qb.whereNull('deleted_at');

    if (typeof id === 'string' && isULID(id)) {
      query = query.where('ulid', id).orWhere('user_ulid', id);
    } else if (typeof id === 'number') {
      query = query.where('user_id', id);
    } else if (isPhoneNumberValid(id)) {
      query = query
        .join('users', 'users.id', 'wallets.user_id')
        .where('users.phone_number', id);
    } else if (validNigerianAccountNumber(id)) {
      query = query.where('nuban', id);
    }
    return query;
  }

  /**
   * Credits a wallet with a specified amount.
   * @param id Wallet id or user's phone number or user id
   * @param amount Amount to credit the wallet with
   * @param errorMessage Optional error message to be thrown if the wallet is not found
   */
  async creditWallet(id: string, amount: number, trx?: Knex.Transaction) {
    await this.walletQuery(id, trx).increment({
      balance: amount,
      ledger_balance: amount
    });

    const wallet = await this.walletQuery(id, trx).first();
    if (!wallet) throw new WalletNotFoundError(id);

    if (!wallet.has_funded)
      return await this.walletQuery(id, trx).update({ has_funded: true });

    return wallet;
  }

  /**
   * Debits a specified amount from a wallet
   * @param id Wallet id or user's phone number or user id
   * @param amount Amount to debit from the wallet
   * @param errorMessage Optional error message to be thrown if the wallet is not found
   */
  async debitWallet(
    id: string,
    amount: number,
    errorMessage?: string,
    trx?: Knex.Transaction
  ) {
    await this.walletQuery(id, trx)
      .where('balance', '>=', amount)
      .where('ledger_balance', '>=', amount)
      .increment({
        balance: -amount,
        ledger_balance: -amount
      });

    const wallet = await this.walletQuery(id, trx).first();
    if (!wallet) throw new WalletNotFoundError(errorMessage || id);

    return wallet;
  }

  async findByNuban(nuban: string[]) {
    return await this.qb.where(nuban);
  }

  async findByUserUlid(ulid: string) {
    return await this.qb.where({ user_ulid: ulid }).first();
  }

  async getLastWalletForChannel(channel: string, trx: Knex.Transaction) {
    return await trx(this.table)
      .join('users', 'users.id', '=', `${this.table}.user_id`)
      .where('users.channel', channel)
      .orderBy('nuban', 'desc')
      .first();
  }
}
