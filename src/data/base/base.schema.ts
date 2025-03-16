import { Knex } from 'knex';

export const SchemaFactory = (
  knex: Knex,
  table: Knex.CreateTableBuilder,
  schemaFields: Record<string, (t: Knex.CreateTableBuilder) => void>
) => {
  if (!schemaFields || Object.keys(schemaFields).length === 0)
    throw new Error('Please specify schemaFields');

  // Define the `id` primary key column
  table.increments('id').unsigned().primary();

  // Apply additional schema fields
  Object.entries(schemaFields).forEach(([column, definition]) => {
    definition(table);
  });

  // Define timestamps
  table
    .timestamp('created_at', { useTz: false })
    .notNullable()
    .defaultTo(knex.fn.now());
  table
    .timestamp('updated_at', { useTz: false })
    .nullable()
    .defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'));
  table.timestamp('deleted_at', { useTz: false }).nullable();
};
