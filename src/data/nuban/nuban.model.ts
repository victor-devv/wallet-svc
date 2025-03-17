import { Model } from '../base/base.model';

export interface Nuban extends Model {
  // 9 digit number user see
  account_number: string;
  // the wallet this is assigned to
  assigned_to: string;
  // 1 digit integrity check number
  check_digit: string;
  // 6 digit bank code
  bank_code: string;

  nuban: string;

  accountNumber: () => string;
}

export interface AccountChannelBlock {
  name: string;
  min: number;
  max: number;
}

export interface NubanImpl {
  account_number: string;
  assigned_to?: string;
  check_digit: string;
  bank_code: string;
  nuban: string;
}
