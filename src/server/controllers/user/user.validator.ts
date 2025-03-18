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
  password: joi
    .string()
    .trim()
    .min(8)
    .max(32)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password cannot exceed 32 characters.',
      'any.required': 'Password is required.'
    }),

  location: LocationValidator,

  selfie: joi.string().uri().trim(),
  profile_picture: joi.string().uri().trim(),
  tier: joi.string().trim(),
  account_number: joi.string().trim()
});

export const login = joi
  .object({
    email: joi.string().trim(),
    phone_number: joi.string().trim(),
    password: joi.string().trim().required()
  })
  .or('email', 'phone_number');

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

export const resetPassword = joi.object({
  phone_number: joi.string().trim().required(),
  password: joi
    .string()
    .trim()
    .min(8)
    .max(32)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password cannot exceed 32 characters.',
      'any.required': 'Password is required.'
    }),
  token: joi.string().length(6).required(),
  pin_type: joi.string().valid('login', 'transaction')
});

export const updatePassword = joi.object({
  password: joi
    .string()
    .trim()
    .min(8)
    .max(32)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
    )
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.max': 'Password cannot exceed 32 characters.',
      'any.required': 'Password is required.'
    })
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
