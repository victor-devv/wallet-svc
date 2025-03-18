import { injectable, inject } from 'inversify';
import bcrypt from 'bcrypt';
import { PhoneNumberUtil } from 'google-libphonenumber';
import env from '@app/common/config/env/env';
import logger from '@app/common/services/logger';
import { TYPES } from '@app/common/config/ioc/types';
import { UserRepository } from './user.repo';
import { User, IUserService } from './user.model';
import { WalletService } from '@app/data/wallet/wallet.service';
import { NubanService } from '@app/data/nuban/nuban.service';
import {
  UserExistsError,
  InvalidPhoneNumberError,
  CountryNotSupportedError
} from '@app/server/controllers/base';
import { PHONE_CODES } from '@app/data/base/constants';
import { SignupDTO } from '@app/server/controllers/user/user.dto';
import { sanitiseGmailAddress } from '@app/common/utils/misc';
import {
  //   OTPRateLimiterService,
  PasscodeRateLimiterService
  //   PinRateLimiterService
} from '@app/server/services';
import { CreateWalletDTO } from '@app/server/controllers/wallet/wallet.dto';

@injectable()
export class UserService implements IUserService {
  private phoneUtil = PhoneNumberUtil.getInstance();

  constructor(
    @inject(TYPES.UserRepository) private repo: UserRepository,
    @inject(TYPES.WalletService) private walletService: WalletService,
    @inject(TYPES.NubanService) private nubanService: NubanService
  ) {}

  async register(body: SignupDTO) {
    await PasscodeRateLimiterService.isAccountClosed(body.phone_number);

    // sanitise gmail addresses & check if already in use
    if (body.email)
      body.email = await this.sanitiseAndValidateEmail(body.email);

    const phoneNumber = this.convertLocalToInternational(body.phone_number);
    const { phone_number, phone_meta } =
      this.formatAndValidatePhoneNumber(phoneNumber);

    await this.isPhoneNumberUsed(phone_number);

    const passcode = await bcrypt.hash(body.passcode, env.salt_rounds);

    const trx = await this.repo.baseKnex.transaction();

    try {
      const user = await this.repo.create(
        { ...body, phone_number, passcode, phone_meta },
        true,
        trx
      );

      //create nuban
      const account = await this.nubanService.giveNuban(body.channel, trx);

      //create wallet
      const createWalletBody: CreateWalletDTO = {
        account,
        nuban: account.nuban,
        is_frozen: false,
        is_verified: false,
        user_id: user._id,
        user_ulid: user.id
      }
      const wallet = await this.walletService.createWallet(createWalletBody, trx);

      // updating the nuban here becase we want to be sure the wallet creation is successful
      const updatedUser = await this.repo.update(
        { id: user._id },
        { account_number: wallet.account.nuban },
        false,
        trx
      );

      delete updatedUser.passcode;
      delete updatedUser._id;
      delete updatedUser.transaction_pin;

      await trx.commit();

      return { user: updatedUser, wallet };
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }

  async updatePasscode(user_id: string, plain_text: string): Promise<User> {
    const hash = await bcrypt.hash(plain_text, env.salt_rounds);

    await this.repo.qb.where({ ulid: user_id }).update({ passcode: hash });

    return await this.repo.byQuery({ conditions: { ulid: user_id } });
  }

  async isPasscodeValid(user_id: string, plain_text: string): Promise<boolean> {
    const user = await this.repo.qb
      .where({ ulid: user_id })
      .select('password')
      .first();

    if (!user) return false;
    return await bcrypt.compare(plain_text, user.password);
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
}
