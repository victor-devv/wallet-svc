import { Model } from '../base/base.model';

/**
 * Typings for a wallet.
 */
export interface Wallet extends Model {
  balance: number;
  ledger_balance: number;
  currency: string;
  has_funded: boolean;
  is_verified: boolean;
  is_frozen: boolean;
  user_id: number;
  user_ulid: string;
  nuban: string;
  account: AccountDetails;
}

export interface IWalletService {
  /**
   * Generarates a NUBAN for a wallet
   */
//   generateNUBAN: () => AccountDetails;

  accountNumber: () => string;
}

export interface AccountDetails {
  // 9 digit number user see
  account_number: string;
  // the wallet this is assigned to
  assigned_to: string;
  // 1 digit integrity check number
  check_digit: string;
  // 6 digit bank code
  bank_code: string;
  // 10 digit nuban account number
  nuban: string;
}

/**
 * Options for wallet to wallet funds transfer
 */
export interface TransferOptions {
    /**
     * Sender ulid
     */
    sender: string;
    /**
     * Recipient ulid
     */
    recipient: string;
    /**
     * Amount to transfer
     */
    amount: number;
    /**
     * Error message prefix if the transfer fails
     */
    errorMessagePrefix?: string;
  }

/**
 * Describes the Data transfer object to delete a user's wallet
 */
export interface DeleteWalletDTO {
  phone_number: string;
}

/**
 * DTO for validating if a wallet can be funded
 */
export interface ValidateFundingDTO {
  user: string;
  amount: number;
}

export interface PhoneNumber {
  phone_number: string;
}

export interface AccountNumber {
  account_number: string;
}
