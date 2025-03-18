import { Model } from '../base';

/**
 * Typings for an individual involved in a transfer either as the `recipient` or `sender`
 */
export interface TransferParticipant {
  id: number;
  uuid: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture?: string;
  category?: string;
  account_number?: string;
  channel?: string;
  bank_code?: string;
  wallet_balance?: number;
  wallet_ledger_balance?: number;
  alias_account_number?: string;
}

/**
 * Recognized transfer types.
 */
export enum TransferType {
  fund_reversal = 'fund_reversal',
  instant_transfer = 'instant_transfer',
  cash_deposit = 'cash_deposit',
  cash_deposit_reversal = 'cash_deposit_reversal',
  fund = 'fund',
  reversal = 'reversal',
  core_vat = 'core_vat',
  core_tss = 'core_tss',
  core_fee = 'core_fee',
  stamp_duty_fee = 'stamp_duty_fee',
  disbursement_fee = 'disbursement_fee'
}

/**
 * Typings for a transfer
 */
export interface Transfer extends Model {
  type: TransferType;
  amount: number;
  currency: string;
  adapter?: string;
  category?: string;
  reference: string;
  description: string;
  sender_id: number;
  recipient_id: number;
  sender: TransferParticipant;
  recipient: TransferParticipant;
}
