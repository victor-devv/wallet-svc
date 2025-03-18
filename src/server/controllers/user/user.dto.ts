import { User, Gender } from '@app/data/user/user.model';
import { Location } from '@app/data/location';

/**
 * Payload sent for a login request
 */
export interface LoginDTO {
  password: string;
  email?: string;
  phone_number?: string;
}

export interface LogoutDTO {
  user_id: string;
}

export interface CreateAccountPayload {
  user: Partial<User>;
  token: string;
}

export interface UpdatePinDTO {
  pin: string;
  user?: string;
}

/**
 * Payload sent for a signup request
 */
export interface SignupDTO {
  first_name: string;
  last_name: string;
  gender?: Gender;
  email?: string;
  phone_number: string;
  dob?: Date;
  password: string;
  location?: Location;
  emergency_phone_number?: string;
  profile_picture?: string;
  channel?: string;
}
