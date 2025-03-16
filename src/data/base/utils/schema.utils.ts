import { Knex } from 'knex';
import { ulid, isValid as isULID } from 'ulidx';
import { CondPairUnary, cond } from 'lodash';
import joi from 'joi';
import {
  isPhoneNumberValid,
  validNigerianAccountNumber
} from '@app/data/base/constants';

/**
 * Defines timestamps fields in a schema
 */
export const timestamps = (table: Knex.CreateTableBuilder) => {
  table.timestamps(true, true);
  table.timestamp('deleted_at').nullable();
};

/**
 * Generates a ULID column
 */
export const uuidColumn = (table: Knex.CreateTableBuilder, columnName = 'ulid') => {
  table.string(columnName, 26).notNullable().unique().defaultTo(ulid());
};

/**
 * Defines schema types
 */
export const trimmedString = (table: Knex.CreateTableBuilder, columnName: string) => {
  table.string(columnName);
};

export const trimmedRequiredString = (table: Knex.CreateTableBuilder, columnName: string) => {
  table.string(columnName).notNullable();
};

/**
 * Set type alias for CondPairUnary...
 */
type UserQuerySelector = CondPairUnary<string, Record<string, unknown>>;

/**
 * Checks if a string is a valid email
 */
const isEmail = (value: string) => joi.string().email().trim().validate(value).error == null;

/**
 * Creates a query object that matches either first_name or last_name fields using a case-insensitive search.
 */
const makeNameQuery = (knex: Knex.QueryBuilder, user: string) => {
  const escapedUser = escapeRegex(user);
  return knex.where((builder) => {
    builder
      .orWhere('first_name', 'like', `%${escapedUser}%`)
      .orWhere('last_name', 'like', `%${escapedUser}%`);
  });
};

/**
 * Query Selectors
 */
const ulidSelector: UserQuerySelector = [isULID, (_id: string) => ({ _id })];
const accountNumberSelector: UserQuerySelector = [validNigerianAccountNumber, (account_number) => ({ account_number })];
const phoneNumberSelector: UserQuerySelector = [isPhoneNumberValid, (phone_number) => ({ phone_number })];
const emailSelector: UserQuerySelector = [isEmail, (email) => ({ email })];

const uniqueIdSelectors = [ulidSelector, accountNumberSelector, phoneNumberSelector];
const nonUniqueSelectors = [...uniqueIdSelectors, emailSelector];


/**
 * Methods for making a user account query filter based on the kind of user information provided
 */
export const userFilters = {
  /**
   * Returns a filter that matches unique user accounts based on an ID
   * @param user the user's ULID, phone number, or account number
   */
  uniqueId(user: string) {
    return cond(uniqueIdSelectors)(user);
  },

  /**
   * Returns a filter that can match [potentially] multiple user accounts.
   * @param user the user's ID, phone number, account number, first or last name, or email
   */
  nonUniqueId(knex: Knex.QueryBuilder, user: string) {
    return cond(nonUniqueSelectors)(user) ?? makeNameQuery(knex, user);
  },
};

/**
 * escapeRegex prepends a `\` to Regexp modifiers in `str`.
 * This allows to pass user input to a $regex query without
 * accidentally running user-specified regular expressions.
 * Without this, this service would be exposed to regular expression
 * denial of service.
 *
 * @see https://github.com/component/escape-regexp/blob/master/index.js
 */
function escapeRegex(str: string): string {
  return str.replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
}
