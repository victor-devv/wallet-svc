import knex from 'knex';

export const attachUlidHook = (knex: knex.Knex) => {
  // Intercept every query result
  knex.client.on('query-response', (response, queryContext) => {
    if (!response) return response;

    // Transform single object or array
    if (Array.isArray(response)) {
      return response.map(transformUlid);
    }
    return transformUlid(response);
  });
};

const transformUlid = (record: any): any => {
  if (!record || typeof record !== 'object') return record;

  const { ulid, ...rest } = record;
  return ulid ? { id: ulid, ...rest } : record;
};
