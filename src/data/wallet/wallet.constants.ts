export const UNTRACKED_DEBIT_TYPES = Object.freeze(['fee']);

/**
 * The kinds of transactions that can happen on a users' account
 * 
 * Interbank transfer not supported (demo project)
 */
const walletDebitType = [
  // instant transfers
  'democredit_to_democredit',
  'democredit_to_account',

  // for various fee debits
  'fee',
] as const;

export type RedisKeyOptions = { user_id: string; type: WalletDebitType };

export type WalletDebitType = typeof walletDebitType[number];
