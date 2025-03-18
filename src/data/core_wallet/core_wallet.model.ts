import { Model } from '../base/base.model';

/**
 * Enum of Core Wallet types
 */
export enum CoreWalletType {
  TSS = 'tss',
  VAT = 'vat',
  FEE = 'fee',
  CHARGE = 'charge',
  SUSPENSE = 'suspense',
  DISBURSEMENT_FEE = 'disbursement_fee',
  STAMP_DUTY_FEE = 'stamp_duty_fee'
}

/**
 * Array of Core Wallet types
 */
export const CORE_WALLETS = Object.values(CoreWalletType);

/**
 * Typings for a core wallet.
 */
export interface CoreWallet extends Model {
  type: CoreWalletType;
  balance: number;
  currency: string;
}

/**
 * DTO for crediting a core wallet
 */
export interface FundCoreWalletDTO {
  type: CoreWalletType;
  amount: number;
}
