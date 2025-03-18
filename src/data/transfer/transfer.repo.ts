import { injectable } from 'inversify';
import { Knex } from 'knex';
import { ulid } from 'ulidx';
import { BaseRepository, DuplicateModelError } from '../base';
import { Transfer } from './transfer.model';

/**
 * Transfer Repository that provides a data interface for transfers
 */
@injectable()
export class TransferRepository extends BaseRepository<Transfer> {
  constructor() {
    super('Transfer', 'transfers');
  }

  /**
   * Overrides base create method, creaates ulid reference by default.
   */
  async create(
    attributes: any,
    return_id: boolean = false,
    trx?: Knex.Transaction
  ): Promise<Transfer> {
    const qb = trx ? trx(this.table) : this.qb;

    const isMultiSave = Array.isArray(attributes);
    if (isMultiSave)
      attributes = attributes.map((record) => ({
        ulid: ulid(),
        reference: `tr_${ulid()}`,
        ...record
      }));
    else
      attributes = { ulid: ulid(), reference: `tr_${ulid()}`, ...attributes };

    try {
      const [insertId] = await qb.insert(attributes);

      if (isMultiSave)
        return await (return_id
          ? qb.where('id', insertId).select('*').select({ _id: 'id' })
          : qb.where('id', insertId).select('*'));
      else return await this.byID(insertId, { return_id, trx });
    } catch (error) {
      if (
        error.code === 'ER_DUP_ENTRY' ||
        error.code === 'SQLITE_CONSTRAINT' ||
        error.code === '23505'
      ) {
        throw new DuplicateModelError(`Transfer exists already`);
      }
      throw error;
    }
  }

  async getTransferByRefence(reference: string) {
    return await this.byQuery({ conditions: { reference } });
  }
}

/**
 * Transfer Repository class instance shared across the app
 */
export const TransferRepo = new TransferRepository();
