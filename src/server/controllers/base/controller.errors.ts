import HttpStatus from 'http-status-codes';

export class ControllerError extends Error {
  code: number;
  error_code: number;
  constructor(message: string, code?: number, error_code?: number) {
    super(message);
    this.code = code || 400;
    error_code = error_code || 0;
  }
}

export class ActionNotAllowedError extends ControllerError {
  constructor(message: string) {
    super(message);
    this.code = HttpStatus.BAD_REQUEST;
  }
}

/**
 * Sets the HTTP status code to 404 `Not Found` when a queried item is not found.
 *
 */
export class NotFoundError extends ControllerError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class UserNotFoundError extends ControllerError {
  constructor(message: string) {
    const errorMessage = `Account: (${message}) not found`;
    super(errorMessage);

    this.code = HttpStatus.NOT_FOUND;
    this.error_code = 300;
  }
}

export class UserExistsError extends ControllerError {
  constructor() {
    const errorMessage = 'A user with matching details exists';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 301;
  }
}

export class CountryNotSupportedError extends ControllerError {
  constructor() {
    const errorMessage =
      'The country you have selected is not supported at the moment';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 399;
  }
}

export class InvalidPhoneNumberError extends ControllerError {
  constructor() {
    const errorMessage = 'The phone number you have entered is invalid';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 316;
  }
}

export class InvalidPasswordError extends ControllerError {
  constructor(remainingTries: number) {
    const errorMessage = `Invalid password entered. You have ${remainingTries} tr${
      remainingTries > 1 ? 'ies' : 'y'
    } left`;
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 305;
  }
}

export class LockedOutError extends ControllerError {
  constructor() {
    const errorMessage =
      "You can't proceed because your account has been blocked";
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 306;
  }
}

export class AccountClosedError extends ControllerError {
  constructor() {
    const errorMessage =
      'This number is linked to a deleted account. Kindly contact support to recover your account';
    super(errorMessage);

    this.code = HttpStatus.FORBIDDEN;
    this.error_code = 329;
  }
}

export class AccountRedisLockedError extends ControllerError {
  constructor() {
    const errorMessage =
      'User has been unlocked by admin and should be redirected to the password recovery flow';
    super(errorMessage);

    this.code = HttpStatus.FORBIDDEN;
    this.error_code = 330;
  }
}

export class AddressNotSetError extends ControllerError {
  constructor() {
    const errorMessage =
      'Your address is not set. Please set your address first';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 307;
  }
}

export class InvalidPinError extends ControllerError {
  constructor(remainingTries: number) {
    const errorMessage = `Invalid pin entered. You have ${remainingTries} tr${
      remainingTries > 1 ? 'ies' : 'y'
    } left`;
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 309;
  }
}

export class PinNotSetError extends ControllerError {
  constructor() {
    const errorMessage =
      'Your transaction PIN has not been set, please set it first';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 310;
  }
}

export class InvalidTokenError extends ControllerError {
  constructor() {
    const errorMessage = 'Invalid OTP';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 312;
  }
}

export class SameNumberError extends ControllerError {
  constructor() {
    const errorMessage = 'The phone numbers should not be the same';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 313;
  }
}

export class ChangeAnotherUserNumberError extends ControllerError {
  constructor() {
    const errorMessage = 'You cannot change the number of another user';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 314;
  }
}

export class AccountBlockRangeInvalidError extends ControllerError {
  constructor(min: number, max: number) {
    const errorMessage = `invalid account block range (min: ${min}, max: ${max})`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 316;
  }
}

export class AccountBlockRangeOverlapError extends ControllerError {
  constructor(min: number, max: number, _min: number, _max: number) {
    const errorMessage = `account block range (min: ${min}, max: ${max}) overlaps with existing range (min: ${_min}, max: ${_max})`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 317;
  }
}

export class AccountBlockCodeUsedError extends ControllerError {
  constructor() {
    const errorMessage = `this channel is in use`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 318;
  }
}

export interface UserNotFoundErrorInterface extends Error {
  code: number;
  error_code: number;
  message: string;
  name: string;
  stack: string;
}

export class TooManyRequestsError extends ControllerError {
  constructor() {
    super(`You have exceeded the number requests allowed in window limit`);
    this.code = HttpStatus.TOO_MANY_REQUESTS;
  }
}
