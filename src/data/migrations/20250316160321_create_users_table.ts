import type { Knex } from 'knex';
import { SchemaFactory } from '../base/base.schema';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    SchemaFactory(knex, table, {
      first_name: (t) => t.string('first_name').notNullable(),
      middle_name: (t) => t.string('middle_name'),
      last_name: (t) => t.string('last_name').notNullable(),
      gender: (t) => t.enum('gender', ['male', 'female']).notNullable(),
      dob: (t) => t.string('dob').notNullable(),
      phone_number: (t) => t.string('phone_number').notNullable().unique(),
      email: (t) => t.string('email').notNullable().unique(),
      password: (t) => t.string('password').notNullable(),
      bvn: (t) => t.string('bvn').unique(),
      selfie: (t) => t.string('selfie'),
      profile_picture: (t) => t.string('profile_picture'),
      location: (t) => t.json('location').notNullable(),

      account_number: (t) => t.string('account_number'),
      transaction_pin: (t) => t.string('transaction_pin'),
      channel: (t) => t.string('channel'),

      phone_meta: (t) => t.json('phone_meta'),
      devices: (t) => t.json('devices'),
      device_id: (t) => t.string('device_id'),
      
      email_verified: (t) => t.boolean('email_verified').defaultTo(false),
      kyc_complete: (t) => t.boolean('kyc_complete').defaultTo(false),
      kyc_verified: (t) => t.boolean('kyc_verified').defaultTo(false),
      account_closed: (t) => t.boolean('account_closed').defaultTo(false)
    });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
