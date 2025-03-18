import { Model } from '../base/base.model';
import {
  transactionSource,
  transactionDestination,
  transactionIntent,
  transactionStatus
} from './transaction.constants';
import { Wallet } from '@app/data/wallet';
import { CoreWalletType } from '@app/data/core_wallet';

/**
 * Recognized Transaction Statuses
 */
export type TransactionStatus = typeof transactionStatus[number];

/**
 * Recongized transaction sources
 */
type TransactionSource = typeof transactionSource[number];

/**
 * Recongized Transaction destinations
 */
type TransactionDestination = typeof transactionDestination[number];

/**
 * Recognized transaction intents.
 */
type TransactionIntent = typeof transactionIntent[number];

/**
 * A user involved in a transaction. Could be a `recipient` or `sender`.
 */
export interface TransactionUser {
  id: string;
  _id?: string;
  ulid: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture?: string;
  channel: string;
  account_number?: string;
  alias_account_number?: string;
  wallet_balance: number;
  wallet_ledger_balance: number;
  bank_code?: string;
  category: string;
}

interface Location {
  latitude: string;
  longitude: string;
}

/**
 * Transaction object.
 */
export interface Transaction extends Model {
  adapter: string;
  amount: number;
  currency: string;
  intent: TransactionIntent;
  reference: string;
  description: string;
  source: TransactionSource;
  destination: TransactionDestination;
  status: TransactionStatus;
  sender: TransactionUser;
  recipient: TransactionUser;
  recipient_category: string;
  sender_category: string;
  device_uuid: string;
  location: Location;
  user_agent: string;
}

export interface TransactionParticipant {
  id: string;
  ulid: string;
  sms_fee?: number;
  channel?: string;
  last_name: string;
  category?: string;
  first_name: string;
  phone_number: string;
  account_number?: string;
  business_name?: string;
  wallet_balance?: number;
  profile_picture?: string;
  wallet_ledger_balance?: number;
}

export interface TransactionsDateRange {
  start: Date;
  end: Date;
}

export interface TransactionCategory {
  transactions: string[];
  category: string;
}

export type TransactionCategories = TransactionCategory[];

export interface AccountChannelBlock {
  name: string;
  min: number;
  max: number;
}

/**
 * Options for crediting a core wallet
 */
export interface CoreWalletCreditOptions {
  /**
   * Amount involved
   */
  amount: number;

  /**
   * Intent of the transaction
   */
  intent: TransactionIntent;

  /**
   * The type of the core wallet
   */
  type: CoreWalletType;

  /**
   * Sender's wallet
   */
  wallet: Wallet;
}

/**
 * typings for Debit transaction logger
 */
export interface TSSDebitTransaction {
  wallet: Wallet;
  amount: number;
  account_name: string;
  phone_number: string;
  alias_account_number?: string;
  account_number?: string;
}

export interface InwardTransferTransaction {
  amount: number;
  account_name: string;
  phone_number: string;
  wallet: Wallet;
  narration: string;
  reference: string;
  alias_account_number?: string;
  account_number?: string;
}

