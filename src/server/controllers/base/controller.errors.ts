import HttpStatus from 'http-status-codes';
import { CORE_WALLETS } from '@app/data/core_wallet';

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
 */
export class NotFoundError extends ControllerError {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class TooManyRequestsError extends ControllerError {
  constructor() {
    super(`You have exceeded the number requests allowed in window limit`);
    this.code = HttpStatus.TOO_MANY_REQUESTS;
  }
}

/**
 * USER ACCOUNT BASED ERRORS
 * 3xx Range
 */
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

export class InvalidPasswordError extends ControllerError {
  constructor(remainingTries: number) {
    const errorMessage = `Invalid password entered. You have ${remainingTries} tr${
      remainingTries > 1 ? 'ies' : 'y'
    } left`;
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 302;
  }
}

export class LockedOutError extends ControllerError {
  constructor() {
    const errorMessage =
      "You can't proceed because your account has been blocked";
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 303;
  }
}

export class TransactionPinBlockedError extends ControllerError {
  constructor() {
    const errorMessage =
      'Your transaction PIN has been blocked because you exceeded the number of allowed attempts.\nTry resetting your transaction PIN to regain access';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 304;
  }
}

export class InvalidPhoneNumberError extends ControllerError {
  constructor() {
    const errorMessage = 'The phone number you have entered is invalid';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 305;
  }
}

export class InvalidPinError extends ControllerError {
  constructor(remainingTries: number) {
    const errorMessage = `Invalid pin entered. You have ${remainingTries} tr${
      remainingTries > 1 ? 'ies' : 'y'
    } left`;
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 306;
  }
}

export class PinNotSetError extends ControllerError {
  constructor() {
    const errorMessage =
      'Your transaction PIN has not been set, please set it first';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 307;
  }
}

export class InvalidTokenError extends ControllerError {
  constructor() {
    const errorMessage = 'Invalid OTP';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 308;
  }
}

export class AccountBlockRangeInvalidError extends ControllerError {
  constructor(min: number, max: number) {
    const errorMessage = `invalid account block range (min: ${min}, max: ${max})`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 309;
  }
}

export class AccountBlockRangeOverlapError extends ControllerError {
  constructor(min: number, max: number, _min: number, _max: number) {
    const errorMessage = `account block range (min: ${min}, max: ${max}) overlaps with existing range (min: ${_min}, max: ${_max})`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 310;
  }
}

export class AccountBlockCodeUsedError extends ControllerError {
  constructor() {
    const errorMessage = `this channel is in use`;
    super(errorMessage);

    this.code = HttpStatus.EXPECTATION_FAILED;
    this.error_code = 311;
  }
}

export class AccountClosedError extends ControllerError {
  constructor() {
    const errorMessage =
      'This number is linked to a deleted account. Kindly contact support to recover your account';
    super(errorMessage);

    this.code = HttpStatus.FORBIDDEN;
    this.error_code = 312;
  }
}

export class AccountRedisLockedError extends ControllerError {
  constructor() {
    const errorMessage =
      'User has been unlocked by admin and should be redirected to the password recovery flow';
    super(errorMessage);

    this.code = HttpStatus.FORBIDDEN;
    this.error_code = 313;
  }
}

export class InvalidUserAgentError extends ControllerError {
  constructor() {
    const errorMessage = 'invalid user-agent';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 314;
  }
}

export class CountryNotSupportedError extends ControllerError {
  constructor() {
    const errorMessage =
      'The country you have selected is not supported at the moment';
    super(errorMessage);

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 315;
  }
}

export interface UserNotFoundErrorInterface extends Error {
  code: number;
  error_code: number;
  message: string;
  name: string;
  stack: string;
}

/**
 * WALLET BASED ERRORS
 * 1xx Range
 */

/**
 * Sets the HTTP status code to 404 `Not Found` when a wallet is not found
 */
export class WalletNotFoundError extends ControllerError {
  constructor(message: string) {
    super(`Account: (${message}) not found`, HttpStatus.NOT_FOUND, 100);
  }
}

/**
 * Sets the HTTP status code to 400 `Bad Request` when an operation is attempted on a frozen wallet
 */
export class FrozenWalletError extends ControllerError {
  constructor() {
    super(
      'Your account has been frozen. Kindly contact customer care for support.'
    );

    this.code = HttpStatus.BAD_REQUEST;
    this.error_code = 101;
  }
}

/**
 * Sets the HTTP status code to 400 `Bad Request` when a debit operation is attempted on a wallet with insufficient funds
 */
export class InsufficientFundsError extends ControllerError {
  constructor(message: string) {
    super(
      `${message} you do not have sufficient funds.`,
      HttpStatus.BAD_REQUEST,
      102
    );
  }
}

/**
 * Sets the HTTP status code to 400 `Bad Request` when a wallet attempts to transfer money to itself.
 */
export class SameWalletError extends ControllerError {
  constructor() {
    super("You can't transfer money to yourself.", HttpStatus.BAD_REQUEST, 103);
  }
}

export class ChannelNotFoundError extends ControllerError {
  constructor(channel: string) {
    super(
      `the requested user channel (${channel}) does not exist`,
      HttpStatus.BAD_REQUEST,
      104
    );
  }
}

/**
 * Sets the HTTP status code to 400 `Bad Request` when the Nuban block for a channel has been filled
 */
export class NubanRangeError extends ControllerError {
  constructor() {
    super('Nuban generated will be out of range', HttpStatus.BAD_REQUEST, 105);
  }
}

/**
 * Sets the HTTP status code to 404 `Not Found` when a core wallet is not found
 */
export class CoreWalletNotFoundError extends ControllerError {
  constructor() {
    super(`Type has to be one of ${CORE_WALLETS}`, HttpStatus.NOT_FOUND, 106);
  }
}
