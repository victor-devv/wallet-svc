/**
 * Recognized transaction statuses
 */
export const transactionStatus = ['completed', 'failed', 'pending'] as const;

/**
 * Recognized transaction sources.
 */
export const transactionSource = [
  'demo_credit',
  'bank_account',
  'card',
  'wallet'
] as const;

/**
 * Recognized transaction destinations
 */
export const transactionDestination = [
  'bank_account',
  'wallet'
] as const;

/**
 * Recognized transaction categories
 */
export const transactionCategories = [
  'transportation',
  'bills',
  'groceries',
  'shopping',
  'eating out',
  'entertainment',
  'investments',
  'family',
  'general',
  'personal care',
  'transfers',
  'vacation',
  'payroll',
  'income',
  'housing',
  'savings',
  'food',
  'refund',
  'holiday',
  'charity',
  'transport',
  'enjoyment',
  'self care',
  'household',
  'investment',
  'card purchase',
  'health',
  'gift',
  'loan'
] as const;

/**
 * Recongized transaction intents
 */
export const transactionIntent = [
  'fund',
  'fund_reversal',
  'core_vat',
  'core_tss',
  'core_fee',
  'stamp_duty_fee',
  'reversal',
  'withdrawal',
  'cash_deposit',
  'instant_transfer',
  'refund'
];

export const ignoredIntents = [
  'core_vat',
  'core_tss',
  'core_fee',
];


/**
 * The kind of transactions that can happen on a users' democredit account
 */
const walletDebitType = [
  // instant transfers
  'democredit_to_democredit',
  // inter bank transfers
  'democredit_to_account',

  // for various fee debit
  'fee',
] as const;

export type WalletDebitType = typeof walletDebitType[number];
