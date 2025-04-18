import { injectable, inject } from 'inversify';
import bcrypt from 'bcrypt';
import { isEmpty } from 'lodash';
import { PhoneNumberUtil } from 'google-libphonenumber';
import env from '@app/common/config/env/env';
import logger from '@app/common/services/logger';
import { TYPES } from '@app/common/config/ioc/types';
import { sanitiseGmailAddress } from '@app/common/utils/misc';
import { User, UserRepository, IUserService } from '.';
import { WalletService } from '@app/data/wallet';
import { NubanService } from '@app/data/nuban';
import {
  UserExistsError,
  InvalidPhoneNumberError,
  CountryNotSupportedError,
  FrozenWalletError,
  PinNotSetError
} from '@app/server/controllers/base';
import { PHONE_CODES } from '@app/data/base/constants';
import { SignupDTO, LoginDTO } from '@app/server/controllers/user/user.dto';
import {
  PasswordRateLimiterService,
  PinRateLimiterService
} from '@app/server/services';
import { CreateWalletDTO } from '@app/server/controllers/wallet/wallet.dto';
import { GenericFetchOptions } from '@app/data/base';
import { AdjutorService } from '@app/server/services';

@injectable()
export class UserService implements IUserService {
  private phoneUtil = PhoneNumberUtil.getInstance();

  constructor(
    @inject(TYPES.UserRepository) private repo: UserRepository,
    @inject(TYPES.WalletService) private walletService: WalletService,
    @inject(TYPES.NubanService) private nubanService: NubanService,
    @inject(TYPES.AdjutorService) private adjutorService: typeof AdjutorService
  ) {}

  /**
   * Creates a user account, generates a nuban and then creates a wallet for the user
   */
  async register(body: SignupDTO) {
    const trx = await this.repo.baseKnex.transaction();

    try {
      await PasswordRateLimiterService.isAccountClosed(body.phone_number);

      // sanitise gmail addresses & check if already in use
      if (body.email) {
        body.email = await this.sanitiseAndValidateEmail(body.email);
        await this.adjutorService.verifyKarmaBlacklist(body.email);
      } else body.email = await this.sanitiseAndValidateEmail(body.phone_number); 

      const phoneNumber = this.convertLocalToInternational(body.phone_number);
      const { phone_number, phone_meta } =
        this.formatAndValidatePhoneNumber(phoneNumber);

      await this.isPhoneNumberUsed(phone_number);

      const password = await bcrypt.hash(body.password, env.salt_rounds);

      const user = await this.repo.create(
        { ...body, phone_number, password, phone_meta },
        true,
        trx
      );

      //create nuban
      const account = await this.nubanService.giveNuban(body.channel, trx);

      const { assigned_to, created_at, updated_at, deleted_at, ...acc } =
        account;

      //create wallet
      const createWalletBody: CreateWalletDTO = {
        account: acc,
        nuban: account.nuban,
        is_frozen: false,
        is_verified: false,
        user_id: user._id,
        user_ulid: user.id
      };

      const wallet = await this.walletService.createWallet(
        createWalletBody,
        trx
      );

      await this.nubanService.updateNubanAssignment(
        account.id,
        wallet._id,
        trx
      );

      // updating the nuban here becase we want to be sure the wallet creation is successful
      const updatedUser = await this.repo.update(
        { id: user._id },
        { account_number: wallet.account.nuban },
        { trx }
      );

      await trx.commit();

      return {
        user: this.format(updatedUser),
        wallet: this.walletService.format(wallet)
      };
    } catch (err) {
      await trx.rollback();
      throw err;
    }
  }

  /**
   * Logs in a user: validates provided password, checks account status (account closure, user locked out, account freeze)
   */
  async signIn(body: LoginDTO) {
    try {
      let query;
      let user;

      if (body.phone_number) {
        const phoneNumber = this.convertLocalToInternational(body.phone_number);
        query = { phone_number: phoneNumber };
      } else query = { email: sanitiseGmailAddress(body.email) };

      user = await this.repo.byQuery({
        conditions: query
      });

      await PasswordRateLimiterService.isAccountClosed(user.phone_number);

      await PasswordRateLimiterService.isUserLockedOut(user.account_number);

      const isPasswordValid = await this.isPasswordValid(
        user.password,
        body.password
      );

      if (!isPasswordValid)
        await PasswordRateLimiterService.limit(user.account_number);

      await PasswordRateLimiterService.reset(user.account_number);

      const wallet = await this.walletService.getWallet(user.id);

      const frozen = await PinRateLimiterService.isAccountFrozen(
        user.account_number
      );

      const account_access = {
        account_frozen: !!frozen
      };

      return {
        user: this.format(user),
        wallet: this.walletService.format(wallet),
        account_access
      };
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a user account
   */
  async getUserAccount(
    id: string | number,
    format: boolean = true,
    options?: GenericFetchOptions
  ) {
    const user = await this.repo.byID(id, { ...options });
    return format ? this.format(user) : user;
  }

  /**
   * Sets the user's transaction pin
   */
  async setPin(user_id: string, pin: string) {
    try {
      const user = await this.repo.byID(user_id);

      await PasswordRateLimiterService.isAccountClosed(user.phone_number);
      const updatedUser = await this.updatePin(user_id, pin);

      return this.format(updatedUser);
    } catch (err) {
      throw err;
    }
  }

  /**
   * Validates the user's transaction pin
   */
  async validatePin(user_id: string, pin: string) {
    try {
      const user = await this.repo.byID(user_id);

      if (!user.transaction_pin) throw new PinNotSetError();

      await PinRateLimiterService.isUserAccountBlocked(user.account_number);

      await PinRateLimiterService.isUserAccountFrozen(user.account_number);

      const wallet = await this.walletService.getWallet(user_id);

      if (wallet.is_frozen) throw new FrozenWalletError();

      const isPinValid = await this.isPasswordValid(user.transaction_pin, pin);

      if (!isPinValid) await PinRateLimiterService.limit(user.account_number);

      await PinRateLimiterService.reset(user.account_number);

      return isPinValid;
    } catch (err) {
      throw err;
    }
  }

  async updatePassword(user_id: string, plain_text: string): Promise<User> {
    const hash = await bcrypt.hash(plain_text, env.salt_rounds);

    await this.repo.qb.where({ ulid: user_id }).update({ password: hash });

    return await this.repo.byQuery({ conditions: { ulid: user_id } });
  }

  async updatePin(user_id: string, plain_text: string): Promise<User> {
    const hash = await bcrypt.hash(plain_text, env.salt_rounds);

    await this.repo.qb
      .where({ ulid: user_id })
      .update({ transaction_pin: hash });

    return await this.repo.byQuery({ conditions: { ulid: user_id } });
  }

  async logout(user_id: string, user_agent_header: any) {
    try {
      await this.repo.byID(user_id);

      const isIOSClient = /CFNetwork/.test(user_agent_header);
      const isAndroidClient = /Dalvik/.test(user_agent_header);

      const update = { devices: {} };
      if (isIOSClient) {
        update['devices']['ios'] = null;
      } else if (isAndroidClient) {
        update['devices']['android'] = null;
      }

      if (!isEmpty(update.devices)) await this.repo.update(user_id, update);
      return;
    } catch (err) {
      throw err;
    }
  }

  async isPasswordValid(
    password: string,
    plain_text: string
  ): Promise<boolean> {
    return await bcrypt.compare(plain_text, password);
  }

  formatAndValidatePhoneNumber(phone_number: string) {
    phone_number = phone_number.replace(/[\D]/g, '');

    const [countryCode] = Object.keys(PHONE_CODES).filter((key) =>
      phone_number.startsWith(key)
    );

    if (!countryCode) throw new CountryNotSupportedError();

    let slicedNumber = phone_number.replace(countryCode, '');
    const countryData = PHONE_CODES[countryCode];

    const { isValid, isoCode } = this.validatePhoneNumber(
      `${countryCode}${slicedNumber}`,
      countryData.iso_code
    );
    if (!isValid) throw new InvalidPhoneNumberError();

    return {
      phone_number: `${countryCode}${slicedNumber}`,
      phone_meta: {
        country: countryData.country,
        iso_code: isoCode,
        prefix: countryData.prefix,
        local_number: slicedNumber
      }
    };
  }

  validatePhoneNumber(phone_number: string, iso_code: string) {
    let isValid = this.phoneUtil.isValidNumberForRegion(
      this.phoneUtil.parse(`+${phone_number}`, iso_code),
      iso_code
    );

    if (!isValid && iso_code === 'US') {
      iso_code = 'CA';
      isValid = this.phoneUtil.isValidNumberForRegion(
        this.phoneUtil.parse(`+${phone_number}`, 'CA'),
        'CA'
      );
    }

    return { isValid, isoCode: iso_code };
  }

  async isPhoneNumberUsed(phone_number: string) {
    const userExists = await this.repo.exists({ phone_number });
    if (userExists) throw new UserExistsError();
  }

  async isEmailUsed(email: string, user_id: number) {
    const user = await this.repo.findByEmail(email);
    if (user && user.ulid !== user_id) throw new UserExistsError();
  }

  async rollBackAccountCreation(body: SignupDTO) {
    try {
      await this.repo.deleteUserByPhoneNumber(body.phone_number);
      logger.message({ info: 'Successfully rolled back account creation' });
    } catch (err) {
      logger.error(err, {
        info: 'Error rolling back account creation',
        data: body
      });
    }
  }

  async sanitiseAndValidateEmail(
    email: string,
    validate: boolean = true
  ): Promise<string> {
    if (email.endsWith('gmail.com') || email.endsWith('googlemail.com'))
      email = sanitiseGmailAddress(email);

    if (validate) {
      const emailInUse = await this.repo.exists({ email });
      if (emailInUse) throw new UserExistsError();
    }

    return email;
  }

  convertLocalToInternational(phone_number: string): string {
    if (/0[7-9][0-1][0-9]{8}/i.test(phone_number))
      return phone_number.replace('0', '234');
    return phone_number;
  }

  format(user: User): Partial<User> {
    const {
      _id,
      password,
      transaction_pin,
      email_verified,
      kyc_complete,
      kyc_verified,
      account_closed,
      ...rest
    } = user;

    return {
      ...rest,
      email_verified: Boolean(email_verified),
      kyc_complete: Boolean(kyc_complete),
      kyc_verified: Boolean(kyc_verified),
      account_closed: Boolean(account_closed)
    };
  }
}
