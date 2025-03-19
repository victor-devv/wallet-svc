import joi from 'joi';

const trimmedString = joi.string().trim();
const trimmedRequiredString = trimmedString.required();
const validAmount = joi.number().positive().min(1).required();
const trimmedNullableString = trimmedString.allow('', null);

/**
 * Valid destinations for a wallet debit
 * Expand as you wish e,g postilion, quickteller, bills, etc
 */
export const WALLET_DESTINATION = Object.freeze(['bank_account', 'wallet']);

export const fundWallet = joi.object({
  adapter: trimmedRequiredString,
  amount: validAmount,
  reference: trimmedRequiredString,
  source: trimmedRequiredString
});

export const debitWallet = joi.object({
  amount: joi.number().positive().default(0).greater(0).required(),
  narration: trimmedNullableString,
  pin: joi
    .string()
    .regex(/[0-9]{4}/)
    .length(4)
    .trim()
    .required()
});
