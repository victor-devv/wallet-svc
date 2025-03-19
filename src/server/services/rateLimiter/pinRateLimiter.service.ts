import redis from '@app/common/services/redis';
import {
  TransactionPinBlockedError,
  InvalidPinError,
  FrozenWalletError
} from '../../controllers/base';
import {
  MAX_FAILED_PIN_TRIES,
  TRANSACTION_PIN_TRIES_KEY,
  TRANSACTION_PIN_LOCKED_KEY,
  ADMIN_TRANSACTION_PIN_LOCKED_KEY
} from '@app/server/constants';

/**
 * Handles rate limiting transaction pin attempts
 */
class PinRateLimiterService {
  /**
   * Build the redis key
   * @param account_number User account number
   */
  attemptsKey(account_number: string) {
    return `${TRANSACTION_PIN_TRIES_KEY}:${account_number}`;
  }

  /**
   * Build the redis key
   * @param account_number User account number
   */
  blockedKey(account_number: string) {
    return `${TRANSACTION_PIN_LOCKED_KEY}:${account_number}`;
  }

  /**
   * builds the redis key for user blocked by admin
   * @param account_number user account number
   */
  frozenKey(account_number: string) {
    return `${ADMIN_TRANSACTION_PIN_LOCKED_KEY}:${account_number}`;
  }

  /**
   * Gets the `login tries` within a day for a user from redis
   * @param account_number User account number
   */
  async getTries(account_number: string) {
    return Number(await redis.get(this.attemptsKey(account_number)));
  }

  private async setTries(account_number: string, tries = 1) {
    await redis.set(this.attemptsKey(account_number), tries);
  }

  /**
   * checks if an account number was locked after transaction pin limit
   * @param account_number user account number
   * @returns
   */
  async isAccountLocked(account_number: string) {
    return await redis.get(this.blockedKey(account_number));
  }

  /**
   * checks if an account was frozen by an admin
   * @param account_number user account number
   */
  async isAccountFrozen(account_number: string) {
    return await redis.get(this.frozenKey(account_number));
  }

  /**
   * Sets the `locked out` status of a user to true
   * @param account_number User account number
   */
  private async setLockedOutStatus(account_number: string) {
    await redis.set(this.blockedKey(account_number), 1);
  }

  /**
   * Increments a user's `transaction pin attempts` limit and locks the user out if they exceed the allowed daily limit
   * @param account_number User account number
   */
  async limit(account_number: string) {
    const tries = await this.getTries(account_number);
    const updatedTries = tries + 1;
    const remainingTries = MAX_FAILED_PIN_TRIES - updatedTries;

    if (updatedTries === MAX_FAILED_PIN_TRIES) {
      await this.setLockedOutStatus(account_number);
      throw new TransactionPinBlockedError();
    }

    await this.setTries(account_number, updatedTries);
    throw new InvalidPinError(remainingTries);
  }

  /**
   * Checks if a user is logged out and throws an error if they are
   * @param account_number User account number
   */
  async isUserAccountBlocked(account_number: string) {
    const isLockedOut = await this.isAccountLocked(account_number);
    if (isLockedOut) throw new TransactionPinBlockedError();
  }

  /**
   * Checks if a user's account has been frozen by an admin
   * @param account_number User account number
   */
  async isUserAccountFrozen(account_number: string) {
    const isFrozen = await this.isAccountFrozen(account_number);
    if (isFrozen) throw new FrozenWalletError();
  }

  async reset(account_number: string) {
    if (this.getTries(account_number))
      await redis.del(this.attemptsKey(account_number));

    if (this.isAccountLocked(account_number))
      await redis.del(this.blockedKey(account_number));
  }
}

export default new PinRateLimiterService();
