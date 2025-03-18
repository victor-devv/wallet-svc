import { injectable, unmanaged } from 'inversify';
import { Knex } from 'knex';
import { ulid } from 'ulidx';
import db from '@app/server/db';
import { DuplicateModelError, ModelNotFoundError } from '.';
import {
  Repository,
  Query,
  QueryResult,
  PaginationQuery,
  GenericFetchOptions
} from '.';

@injectable()
export class BaseRepository<T> implements Repository<T> {
  protected readonly table: string;
  protected readonly knex: Knex = db.getConnection();

  constructor(
    @unmanaged() private name: string,
    @unmanaged() tableName: string
  ) {
    this.table = tableName;
  }

  public get baseKnex(): Knex {
    return this.knex;
  }

  public get tableName(): string {
    return this.table;
  }

  // Shortcut for Query Builder call
  public get qb(): Knex.QueryBuilder {
    return this.knex<T>(this.table);
  }

  /**
   * Converts a condition into a Knex query filter
   */
  getQuery(condition: number | string | object) {
    return typeof condition === 'number'
      ? { id: condition }
      : typeof condition === 'string'
      ? { ulid: condition }
      : { ...condition };
  }

  /**
   * Creates one or more record.
   */
  async create(
    attributes: any,
    return_id: boolean = false,
    trx?: Knex.Transaction
  ): Promise<T> {
    const qb = trx ? trx(this.table) : this.qb;

    const isMultiSave = Array.isArray(attributes);
    if (isMultiSave)
      attributes = attributes.map((record) => ({ ulid: ulid(), ...record }));
    else attributes = { ulid: ulid(), ...attributes };

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
        throw new DuplicateModelError(`${this.name} exists already`);
      }
      throw error;
    }
  }

  /**
   * Finds a record by its id
   */
  async byID(id: number | string, options?: GenericFetchOptions): Promise<T> {
    const query = typeof id === 'number' ? { id } : { ulid: id };

    const qb = options?.trx ? options.trx(this.table) : this.qb;

    const builder = qb.where(query);
    if (!options?.archived) builder.whereNull('deleted_at');

    if (!options?.projections) options.projections = '*';

    const result = await (options?.return_id
      ? builder.select(options.projections).select({ _id: 'id' }).first()
      : builder.select(options.projections).first());

    if (!result) throw new ModelNotFoundError(`${this.name} not found`);

    return result;
  }

  /**
   * Finds a record by an object query.
   */
  async byQuery(query: Query, options?: GenericFetchOptions): Promise<T> {
    const qb = options?.trx ? options.trx(this.table) : this.qb;

    const builder = qb
      .column(query.projections || '*')
      .select()
      .where(query.conditions);

    if (!options?.archived) builder.whereNull('deleted_at');

    return await (options?.return_id
      ? builder.select({ _id: 'id' }).first()
      : builder.first());
  }

  /**
   * Finds all records that match a query
   */
  async all(query?: Query, options?: GenericFetchOptions): Promise<T[]> {
    const builder = this.qb
      .select(query?.projections || '*')
      .where(query?.conditions || {});

    if (options?.return_id) builder.select({ _id: 'id' });
    if (!query?.archived) builder.whereNull('deleted_at');
    return await builder.orderBy(
      query?.sort?.[0] || 'created_at',
      query?.sort?.[1] || 'desc'
    );
  }

  /**
   * Same as `all()` but returns paginated results.
   */
  async list(
    query: PaginationQuery,
    return_id: boolean = false
  ): Promise<QueryResult<T>> {
    const page = Number(query.page) - 1 || 0;
    const per_page = Number(query.per_page) || 20;
    const offset = page * per_page;

    const total_count = await this.qb
      .where(query.conditions)
      .whereNull(query.archived ? null : 'deleted_at')
      .count({ count: '*' });

    const rows = await this.qb
      .select(query.projections || '*')
      .where(query.conditions)
      .whereNull(query.archived ? null : 'deleted_at')
      .limit(per_page)
      .offset(offset)
      .orderBy(query.sort?.[0] || 'created_at', query.sort?.[1] || 'desc');

    return {
      page: page + 1,
      per_page,
      total_pages: total_count[0].count,
      sorted_by: query.sort?.[0] || 'created_at',
      result: rows
    };
  }

  /**
   * Updates a single record that matches a particular condition.
   */
  async update(
    condition: string | object,
    update: object,
    options?: GenericFetchOptions
  ): Promise<T> {
    const qb = options?.trx ? options.trx(this.table) : this.qb;

    const query = this.getQuery(condition);

    const updatedRows = await qb.where(query).update(update);
    if (updatedRows !== 1)
      throw new ModelNotFoundError(`${this.name} not found`);

    return await this.byQuery({ conditions: query }, { ...options });
  }

  /**
   * Updates multiple records that match a query
   */
  async updateAll(
    condition: string | object,
    update: object,
    options?: GenericFetchOptions
  ): Promise<boolean> {
    const qb = options?.trx ? options.trx(this.table) : this.qb;

    const query = this.getQuery(condition);
    await qb.where(query).update(update);
    return true;
  }

  /**
   * Soft deletes a record by setting deleted_at timestamp
   */
  async remove(condition: string | object): Promise<boolean> {
    const query = this.getQuery(condition);

    const record = await this.byQuery({ conditions: query });
    if (!record) throw new ModelNotFoundError(`${this.name} not found`);

    await this.qb.where(query).update({ deleted_at: new Date() });
    return true;
  }

  /**
   * Permanently deletes a record
   */
  async destroy(condition: string | object): Promise<boolean> {
    const query = this.getQuery(condition);

    const record = await this.byQuery({ conditions: query });
    if (!record) throw new ModelNotFoundError(`${this.name} not found`);

    await this.qb.where(query).del();
    return true;
  }
}
