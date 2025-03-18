import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transactions', (table) => {
    SchemaFactory(knex, table, {
      adapter: (t) => t.string('adapter').notNullable(),
      amount: (t) => t.decimal('amount', 15, 2).notNullable(),
      currency: (t) => t.string('currency').notNullable().defaultTo('NGN'),
      intent: (t) => t.string('intent').notNullable(),
      reference: (t) => t.string('reference').notNullable(),
      description: (t) => t.string('description'),
      source: (t) => t.string('source').notNullable(),
      destination: (t) => t.string('destination').notNullable(),
      status: (t) => t.string('status').notNullable(),
      sender: (t) => t.json('sender'),
      recipient: (t) => t.json('recipient'),
      sender_category: (t) => t.string('sender_category').defaultTo('general'),
      recipient_category: (t) => t.string('recipient_category').defaultTo('general'),
      device_uuid: (t) => t.string('device_uuid'),
      user_agent: (t) => t.string('user_agent'),
      location: (t) => t.json('location')
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('transactions');
}
