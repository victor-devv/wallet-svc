import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('channels', (table) => {
    SchemaFactory(knex, table, {
        name: (t) => t.string('name').notNullable().unique(),
        min: (t) => t.integer('min').notNullable(),
        max: (t) => t.integer('max').notNullable()
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('channels');
}
