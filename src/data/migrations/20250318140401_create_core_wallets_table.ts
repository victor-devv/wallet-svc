import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('core_wallets', (table) => {
    SchemaFactory(knex, table, {
        type: (t) => t.string('type').notNullable().unique(),
        balance: (t) => t.decimal('balance', 15, 2).defaultTo(0),
        currency: (t) => t.string('currency').defaultTo('NGN')
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('core_wallets');
}
