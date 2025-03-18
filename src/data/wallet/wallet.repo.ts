import { injectable } from 'inversify';
import { Knex } from 'knex';
import { BaseRepository } from '../base';
import { Wallet } from './wallet.model';

@injectable()
export class WalletRepository extends BaseRepository<Wallet> {
  constructor() {
    super('Wallet', 'wallets');
  }

  async findByNuban(account_number: string[]) {
    return await this.qb.whereRaw("JSON_EXTRACT(account, '$.nuban') = ?", [
      account_number
    ]);
  }

  async findByUserUlid(ulid: string) {
    return await this.qb.where({ user_ulid: ulid }).first();
  }

  async getLastWalletForChannel(channel: string, trx: Knex.Transaction) {
    return await trx(this.table)
      .whereRaw('JSON_UNQUOTE(JSON_EXTRACT(??, "$.user.channel")) = ?', [
        'account',
        channel
      ])
      .orderByRaw('JSON_UNQUOTE(JSON_EXTRACT(??, "$.account.nuban")) DESC', [
        'account'
      ])
      .first();
  }
 
}
