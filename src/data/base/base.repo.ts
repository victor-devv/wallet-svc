import db from '@app/server/db';
import { Knex } from 'knex';
import { DuplicateModelError, ModelNotFoundError } from '.';
import { Repository, Query, QueryResult, PaginationQuery } from '.';

export class BaseRepository<T> implements Repository<T> {
  protected readonly table: string;
  protected readonly knex: Knex = db.getConnection();

  constructor(private name: string, tableName: string) {
    this.table = tableName;
  }

  // Shortcut for Query Builder call
  public get qb(): Knex.QueryBuilder {
    return this.knex<T>(this.table)
  }

  /**
   * Converts a condition into a Knex query filter
   */
  getQuery(condition: number | object) {
    return typeof condition === 'number' || typeof condition === 'string'
      ? { id: condition }
      : { ...condition };
  }

  /**
   * Creates one record.
   */
  async create(attributes: any, condition: any): Promise<T> {
    const existingRecord = await this.qb.where(condition).first();
    if (existingRecord) throw new DuplicateModelError(`${this.name} already exists`);

    const [id] = await this.qb.insert(attributes).returning('id');
    return await this.byID(id);
  }

  /**
   * Finds a record by its id
   */
  async byID(id: number, archived = false): Promise<T> {
    const builder = this.qb.where({id});
    if (!archived) builder.whereNull('deleted_at');
    
    const result = await builder.first();
    if (!result) throw new ModelNotFoundError(`${this.name} not found`);

    return result as Promise<T>;
  }

  /**
   * Finds a record by an object query.
   */
  async byQuery(query: Query, archived?: boolean): Promise<T> {
    const builder = this.qb
      .column(query.projections || '*')
      .select()
      .where(query.conditions);

    if (!archived) builder.whereNull('deleted_at');
  
    const result = await builder.first();

    return result as Promise<T> || null;
  }

  /**
   * Finds all records that match a query
   */
  async all(query: Query): Promise<T[]> {
    const builder = this.qb
      .column(query.projections || '*')
      .select()
      .where(query.conditions);

    if (!query.archived) builder.whereNull('deleted_at');
    const result = await builder.orderBy(query.sort?.[0] || 'created_at', query.sort?.[1] || 'desc');
    return result as Promise<T[]> || null;
  }

  /**
   * Same as `all()` but returns paginated results.
   */
  async list(query: PaginationQuery): Promise<QueryResult<T>> {
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
      result: rows as T[],
    };
  }

  /**
   * Updates a single record that matches a particular condition.
   */
  async update(condition: number | object, update: object): Promise<T> {
    const query = this.getQuery(condition);

    const updatedRows = await this.qb.where(query).update(update);
    if (updatedRows[0] != 1) throw new ModelNotFoundError(`${this.name} not found`);

    return await this.byQuery({ conditions: query });
  }

  /**
   * Updates multiple records that match a query
   */
  async updateAll(condition: number | object, update: object): Promise<boolean> {
    const query = this.getQuery(condition);
    await this.qb.where(query).update(update);
    return true;
  }

  /**
   * Soft deletes a record by setting deleted_at timestamp
   */
  async remove(condition: number | object): Promise<boolean> {
    const query = this.getQuery(condition);

    const record = await this.byQuery({ conditions: query });
    if (!record) throw new ModelNotFoundError(`${this.name} not found`);

    await this.qb.where(query).update({ deleted_at: new Date() });
    return true;
  }

  /**
   * Permanently deletes a record
   */
  async destroy(condition: number | object): Promise<boolean> {
    const query = this.getQuery(condition);

    const record = await this.byQuery({ conditions: query });
    if (!record) throw new ModelNotFoundError(`${this.name} not found`);

    await this.qb.where(query).del();
    return true;
  }
}
