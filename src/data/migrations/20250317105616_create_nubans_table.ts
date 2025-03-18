import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('nubans', (table) => {
    SchemaFactory(knex, table, {
      account_number: (t) => t.string('account_number').notNullable(),
      check_digit: (t) => t.string('check_digit').notNullable(),
      bank_code: (t) => t.string('bank_code').notNullable(),
      nuban: (t) => t.integer('nuban').unsigned(),
      assigned_to: (t) => t.string('assigned_to')
    });

    table
      .foreign('assigned_to')
      .references('id')
      .inTable('wallets')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('nubans');
}
