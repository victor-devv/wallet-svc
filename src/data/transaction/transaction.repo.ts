import { injectable } from 'inversify';
// import { Knex } from 'knex';
// import { ulid } from 'ulidx';
import { BaseRepository } from '../base';
import { Transaction } from '.';

/**
 * Transaction Repository that provides a data interface for transactions
 */
@injectable()
export class TransactionRepository extends BaseRepository<Transaction> {
  constructor() {
    super('Transaction', 'transactions');
  }

}
