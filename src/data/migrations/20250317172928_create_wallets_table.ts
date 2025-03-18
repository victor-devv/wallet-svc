import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('wallets', (table) => {
    SchemaFactory(knex, table, {
      balance: (t) => t.decimal('balance', 15, 2).defaultTo(0),
      ledger_balance: (t) => t.decimal('ledger_balance', 15, 2).defaultTo(0),
      currency: (t) => t.string('currency').defaultTo('NGN'),
      has_funded: (t) => t.boolean('has_funded').defaultTo(false),
      is_verified: (t) => t.boolean('is_verified').defaultTo(false),
      is_frozen: (t) => t.boolean('is_frozen').defaultTo(false),
      user_id: (t) => t.integer('user_id').unsigned().notNullable(),
      user_ulid: (t) => t.string('user_ulid').notNullable(),
      nuban: (t) => t.string('nuban').notNullable(),
      account: (t) => t.json('account').notNullable()
    });

    table
      .foreign('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('wallets');
}
