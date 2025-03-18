import { injectable } from 'inversify';
import { BaseRepository } from '../base';
import { User } from './user.model';

@injectable()
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super('User', 'users');
  }

  async findByPhoneNumbers(phone_numbers: string[]) {
    return await this.qb.whereIn('phone_number', phone_numbers);
  }

  async findByEmail(email: string) {
    return await this.qb.where({ email }).first();
  }

  async deleteUserByPhoneNumber(phone_number: string) {
    return await this.qb.where({ phone_number }).del();
  }

  async exists(conditions: object): Promise<boolean> {
    const user = await this.qb.where(conditions).first();
    return !!user;
  }
}
