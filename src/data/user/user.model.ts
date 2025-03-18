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
  kyc_verified: boolean;
  email_verified: boolean;
  kyc_complete: boolean;
  account_closed?: boolean;
  deleted_at: Date | null;
}

export interface IUserService {
  updatePassword: (user_id: string, plain_text: string) => Promise<User>;
  isPasswordValid: (user_id: string, plain_text: string) => Promise<boolean>;

  // updatePin: (user_id: string, plain_text: string) => Promise<User>;
  // isPinValid: (user_id: string, plain_text: string) => Promise<boolean>;
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
