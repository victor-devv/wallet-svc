/**
 * A repository query
 */
export interface Query {
  conditions?: object;
  projections?: Array<string>;
  sort?: Array<string>;
  archived?: boolean | string;
  relations?: any;
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
  create(attributes: any): Promise<T>;
  byID(id: string, projections?: any, archived?: boolean): Promise<T>;
  byQuery(query: any, projections?: any, archived?: boolean): Promise<T>;
  list(query: PaginationQuery): Promise<QueryResult<T>>;
  all(query: Query): Promise<T[]>;
  update(condition: string | object, update: any): Promise<T>;
  updateAll(condition: string | object, update: any): Promise<boolean>;
  remove(condition: string | object): Promise<boolean>;
  destroy(condition: string | object): Promise<boolean>;
}
