import { Knex } from 'knex';
import '@app/common/utils/string.extensions';
import { BaseRepository } from '../base';
import { Nuban, NubanImpl } from './nuban.model';

export class NubanRepository extends BaseRepository<Nuban> {
  constructor() {
    super('Nuban', 'nubans');
  }

  /**
   * Check if any account numbers exist
   */
  async exists(): Promise<boolean> {
    const result = await this.qb
      .whereNull('assigned_to')
      .orWhere('assigned_to', '')
      .first();

    return !!result;
  }

  async getLastChannelWallet(channel: string, trx: Knex.Transaction) {
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

  async createNuban(account_number: string, trx: Knex.Transaction) {
    const bank_code = '100000'; //faux bank code
    const check_digit = `${this.calCheckDigit(account_number, bank_code)}`;

    const account: NubanImpl = {
      bank_code,
      check_digit,
      account_number,
      nuban: account_number + check_digit
    };

    return this.create(account, trx);
  }

  getNuban (account: NubanImpl) {
    return `${account.bank_code}${account.account_number}${account.check_digit}`;
  }

  accountNumber (account: NubanImpl) {
    return `${account.account_number}${account.check_digit}`;
  }

  private calCheckDigit(account_number: string, bank_code: string) {
    const [a, b, c, d, e, f] = bank_code;
    const [g, h, i, j, k, l, m, n, o] = account_number;
    const acc =
      a.times(3) +
      b.times(7) +
      c.times(3) +
      d.times(3) +
      e.times(7) +
      f.times(3) +
      g.times(3) +
      h.times(7) +
      i.times(3) +
      j.times(3) +
      k.times(7) +
      l.times(3) +
      m.times(3) +
      n.times(7) +
      o.times(3);
    const acc_prime = 10 - (acc % 10);
    return acc_prime === 10 ? 0 : acc_prime;
  }
}

export default new NubanRepository();
