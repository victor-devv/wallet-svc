import { AccountDetails } from '@app/data/wallet/wallet.model';

/**
 * DTO for creating a new wallet
 */
export interface CreateWalletDTO {
  is_frozen: boolean;
  is_verified: boolean;
  account: Partial<AccountDetails>;
  nuban: string;
  user_id: number;
  user_ulid: string;
  account_number?: string;
}

/**
 * DTO for funding a wallet
 */
export interface FundWalletDTO {
  adapter: string;
  amount: number;
  reference: string;
  source: 'bank_account';
  user: string;
}

/**
 * DTO for performing withdrawals
 */
export interface DebitWalletDTO {
  account: string;
  narration: string;
  amount: number;
  pin: string;
  fee: number;
  from_account: string;
  from_acct_name: string;
  reference: string;
  user: any;
}

export type WALLET_ACTION_TYPES = 'freeze' | 'unfreeze';

/**
 * DTO for freezing a user's wallet by admin
 */
export interface FreezeWalletDTO {
  user: string;
  action: WALLET_ACTION_TYPES;
}
