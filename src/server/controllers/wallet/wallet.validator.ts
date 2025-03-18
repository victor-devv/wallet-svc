import joi from 'joi';

const trimmedString = joi.string().trim();
const trimmedRequiredString = trimmedString.required();
const validAmount = joi.number().positive().min(1).required();


/**
 * Valid destinations for a wallet debit
 * Expand as you wish e,g postilion, quickteller, bills, etc
 */
export const WALLET_DESTINATION = Object.freeze([
  'bank_account',
  'wallet'
]);

export const fundWallet = joi.object({
  adapter: trimmedRequiredString,
  amount: validAmount,
  reference: trimmedRequiredString,
  source: trimmedRequiredString
});

export const FreezeWallet = {
  user: trimmedRequiredString,
  action: trimmedRequiredString.valid('freeze', 'unfreeze')
};
