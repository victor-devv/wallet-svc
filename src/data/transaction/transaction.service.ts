import { injectable } from 'inversify';
// import { TYPES } from '@app/common/config/ioc/types';
import { TransactionParticipant } from '.';
import { TransactionCategories } from './transaction.typings';
import { User } from '../user';
import { Wallet } from '../wallet';

@injectable()
export class TransactionService {
  constructor() // @inject(TYPES.TransactionRepository) private repo: TransactionRepository
  {}

  transformToTransactionParticipant(
    user: User,
    wallet: Wallet,
    category: TransactionCategories = 'transfers'
  ): TransactionParticipant {
    return {
      category,
      id: user.id,
      ulid: user.ulid,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
      profile_picture: user.profile_picture,
      channel: user.channel,
      account_number: wallet.nuban,
      wallet_balance: wallet.balance,
      wallet_ledger_balance: wallet.ledger_balance
    };
  }
}
