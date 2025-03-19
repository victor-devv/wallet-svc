import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transfers', (table) => {
    SchemaFactory(knex, table, {
      type: (t) => t.string('type').defaultTo('instant_transfer'),
      amount: (t) => t.decimal('amount', 15, 2),
      currency: (t) => t.string('currency').defaultTo('NGN'),
      adapter: (t) => t.string('adapter'),
      category: (t) => t.string('category'),
      reference: (t) => t.string('reference').notNullable(),
      description: (t) => t.string('description'),
      sender_id: (t) => t.integer('sender_id').unsigned(),
      recipient_id: (t) => t.integer('recipient_id').unsigned(),
      sender: (t) => t.json('sender'),
      recipient: (t) => t.json('recipient')
    });

    table
      .foreign('sender_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table
      .foreign('recipient_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('transfers');
}
