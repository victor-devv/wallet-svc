import redis from '@app/common/services/redis';
import { 
  DAILY_FAILED_LOGIN_TRIES,
  LOGIN_TRIES_KEY,
  CLOSED_ACCOUNT_KEY,
  LOCKED_OUT_KEY,
  DURATION_ONE_DAY
} from '@app/server/constants';
import {
  LockedOutError,
  InvalidPasswordError,
  AccountClosedError
} from '../../controllers/base';

/**
 * Handles rate limiting login attempts within a day
 */
class PasswordRateLimiterService {
  /**
   * Gets the `login tries` within a day for a user from redis
   * @param account_number User phone number
   */
  async getLoginTries(account_number: string) {
    const key = `${LOGIN_TRIES_KEY}:${account_number}`;
    const loginTries = await redis.get(key);

    return Number(loginTries);
  }

  /**
   * Sets the `login tries` for a user and persists it for a day
   * @param account_number User phone number
   * @param tries Current number of tries for the user. Defaults to `1`
   */
  private async setLoginTries(account_number: string, tries = 1) {
    const key = `${LOGIN_TRIES_KEY}:${account_number}`;
    await redis.set(key, tries, 'EX', DURATION_ONE_DAY);
  }

  /**
   * Returns the `locked out` status for a user from redis
   * @param account_number User account number
   */
  async getLockedOutStatus(account_number: string) {
    const key = `${LOCKED_OUT_KEY}:${account_number}`;
    return await redis.get(key);
  }

  /**
   * Sets the `locked out` status of a user to true and persists it for a day
   * @param account_number User phone number
   */
  private async setLockedOutStatus(account_number: string) {
    const key = `${LOCKED_OUT_KEY}:${account_number}`;
    await redis.set(key, true, 'EX', DURATION_ONE_DAY);
  }

  /**
   * Increments a user's `login tries` limit and locks the user out if they exceed the allowed daily limit
   * @param account_number User account number
   */
  async limit(account_number: string) {
    const loginTries = await this.getLoginTries(account_number);
    const updatedLoginTries = loginTries + 1;
    const remainingTries = DAILY_FAILED_LOGIN_TRIES - updatedLoginTries;

    if (updatedLoginTries === DAILY_FAILED_LOGIN_TRIES) {
      await this.setLockedOutStatus(account_number);
      throw new LockedOutError();
    }

    await this.setLoginTries(account_number, updatedLoginTries);

    throw new InvalidPasswordError(remainingTries);
  }

  /**
   * Checks if a user is logged out and throws an error if they are
   * @param account_number User account number
   */
  async isUserLockedOut(account_number: string) {
    const isLockedOut = await this.getLockedOutStatus(account_number);
    if (isLockedOut) throw new LockedOutError();
  }

  /**
   * Resets the locked out status and login limits for a user
   * @param account_number User account number
   */
  async reset(account_number: string) {
    if (this.getLoginTries(account_number))
      await redis.del(`${LOGIN_TRIES_KEY}:${account_number}`);

    if (this.getLockedOutStatus(account_number))
      await redis.del(`${LOCKED_OUT_KEY}:${account_number}`);
  }

  /**
   * Returns the account status for a user from redis
   * @param phone_number User phone number
   */
  async getAccountStatus(phone_number: string) {
    const key = `${CLOSED_ACCOUNT_KEY}:${phone_number}`;
    return await redis.get(key);
  }

  /**
   * Checks if a phone number is linked to a closed account
   * @param phone_number User phone number
   */
  async isAccountClosed(phone_number: string) {
    const isClosed = await this.getAccountStatus(phone_number);
    if (isClosed) throw new AccountClosedError();
  }
}

export default new PasswordRateLimiterService();
