import { Knex } from 'knex';

/**
 * A repository query
 */
export interface Query {
  conditions?: object;
  projections?: string | Array<string> | object;
  sort?: Array<string>;
  archived?: boolean | string;
  relations?: any;
}

export interface GenericFetchOptions {
  projections?: string | Array<string> | object;
  archived?: boolean | string;
  return_id?: boolean | string; //returns the original id (not ulid [public id]) of the record(s) if true
  trx?: Knex.Transaction;
}

export interface QueryResult<T> {
  page: number;
  per_page: number;
  sorted_by: string;
  result: T[];
  total_pages?: number;
}

/**
 * A repository query that specifies pagination options
 */
export interface PaginationQuery {
  archived?: boolean | string;
  conditions: any;
  page?: number;
  per_page?: number;
  projections?: Array<string>;
  sort?: Array<string>;
  relations?: any;
}

export interface Repository<T> {
  create(attributes: any, return_id?: boolean): Promise<T>;
  byID(id: string, options?: GenericFetchOptions): Promise<T>;
  byQuery(query: any, options?: GenericFetchOptions): Promise<T>;
  list(query: PaginationQuery): Promise<QueryResult<T>>;
  all(query: Query): Promise<T[]>;
  update(
    condition: string | object,
    update: any,
    options?: GenericFetchOptions
  ): Promise<T>;
  updateAll(
    condition: string | object,
    update: any,
    options?: GenericFetchOptions
  ): Promise<boolean>;
  remove(condition: string | object): Promise<boolean>;
  destroy(condition: string | object): Promise<boolean>;
}
