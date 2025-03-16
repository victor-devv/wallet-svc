import { Model } from '../base';
import { Location } from '../location';

export interface User extends Model {
  // personal details
  first_name: string;
  last_name: string;
  middle_name: string;
  gender: Gender;
  phone_number: string;
  dob: Date;
  bvn: string;
  email: string;
  selfie?: string;
  profile_picture?: string;
  location: Location;

  // account details
  account_number?: string;

  // passwords
  password: string;
  transaction_pin: string;

  // misc
  phone_meta?: PhoneMeta;
  devices: Device;
  channel?: string;
  device_id: string;

  // user account flags
  is_verified: boolean;
  email_verified: boolean;
  kyc_complete: boolean;
  account_closed?: boolean;
  deleted_at: Date | null;

  updatePassword: (plainText: string) => Promise<User>;
  isPasswordValid: (plainText: string) => Promise<Boolean>;

  updatePin: (plainText: string) => Promise<User>;
  isPinValid: (plainText: string) => Promise<Boolean>;
}

export type Gender = 'male' | 'female';

export interface Device {
  ios: string;
  android: string;
}

interface PhoneMeta {
  country: string;
  iso_code: string;
  prefix: string;
  local_number: string;
}
