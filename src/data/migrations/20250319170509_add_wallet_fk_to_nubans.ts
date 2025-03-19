import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('nubans', (table) => {
    table
      .foreign('assigned_to')
      .references('id')
      .inTable('wallets')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('nubans', (table) => {
    table.dropForeign(['assigned_to'], 'nubans_assigned_to_wallets');
  });
}
