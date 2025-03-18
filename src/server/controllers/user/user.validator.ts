import joi from 'joi';
import { LocationValidator } from '../address/address.validator';
import { RegexBuilderForFlaggedWords } from '@app/server/utils';

export const signup = joi.object({
  first_name: joi
    .string()
    .trim()
    .required()
    .regex(RegexBuilderForFlaggedWords()),
  middle_name: joi.string().trim().regex(RegexBuilderForFlaggedWords()),
  last_name: joi
    .string()
    .trim()
    .required()
    .regex(RegexBuilderForFlaggedWords()),
  dob: joi.date().required(),
  gender: joi.string().trim().required(),
  email: joi.string().email().trim(),
  phone_number: joi.string().trim().required(),
  channel: joi.string(),
  passcode: joi
    .string()
    .trim()
    .regex(/[0-9]{4}/)
    .length(4)
    .required(),

  location: LocationValidator,

  selfie: joi.string().uri().trim(),
  profile_picture: joi.string().uri().trim(),
  tier: joi.string().trim(),
  account_number: joi.string().trim()
});

export const login = joi.object({
  phone_number: joi.string().trim().required(),
  passcode: joi
    .string()
    .trim()
    .regex(/[0-9]{4}/)
    .length(4)
    .required()
});

export const recoverAccount = joi.object({
  phone_number: joi.string().trim().required()
});

export const verifyRecoverAccountOTP = joi.object({
  phone_number: joi
    .string()
    .trim()

    .required(),
  otp: joi
    .string()
    .regex(/[0-9]{6}/)
    .length(6)
    .trim()
    .required()
});

export const resetPasscode = joi.object({
  phone_number: joi.string().trim().required(),
  passcode: joi.string().length(4).trim().required(),
  token: joi.string().length(6).required(),
  pin_type: joi.string().valid('login', 'transaction')
});

export const updatePasscode = joi.object({
  passcode: joi.string().length(4).trim().required()
});

export const transactionPin = joi.object({
  pin: joi
    .string()
    .regex(/[0-9]{4}/)
    .length(4)
    .trim()
    .required()
});

export const updateUser = joi.object({
  ulid: joi.string().trim(),
  first_name: joi.string().trim().regex(RegexBuilderForFlaggedWords()),
  last_name: joi.string().trim().regex(RegexBuilderForFlaggedWords()),
  gender: joi.string().trim(),
  email: joi.string().email().trim(),
  dob: joi.date(),
  selfie: joi.string().uri().trim(),
  profile_picture: joi.string().uri().trim(),
  device_id: joi.string().trim(),
  location: LocationValidator
});

export const sendOtp = joi.object({
  phone_number: joi.string().trim().required()
});

export const verifyOtp = joi.object({
  phone_number: joi.string().trim().required(),
  otp: joi
    .string()
    .regex(/[0-9]{6}/)
    .length(6)
    .trim()
    .required()
});

export const verifyBvn = joi.object({
  bvn: joi
    .string()
    .regex(/[0-9]{11}/)
    .length(11)
    .required()
});

export const changeNumber = joi.object({
  phone_number: joi.string().trim().required(),
  otp: joi
    .string()
    .regex(/[0-9]{6}/)
    .length(6)
    .trim()
    .required()
});

export const setSelfieImage = joi.object({
  selfie: joi.string().uri().trim().required()
});

export const logout = joi.object({
  user_id: joi.string().trim().required()
});

export const closeAccount = joi.object({
  user_id: joi.string().trim().required()
});
