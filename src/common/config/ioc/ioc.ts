import { Container } from 'inversify';
import { TYPES } from './types';
import '../../../server/controllers';

import { UserRepository, UserService, IUserService } from '../../../data/user';
import { WalletRepository, WalletService } from '../../../data/wallet';
import { NubanRepository, NubanService } from '../../../data/nuban';
import { BaseRepository } from '../../../data/base/base.repo';
import { ChannelRepository } from '../../../data/channel/channel.repo';
import { CoreWalletRepository } from '../../../data/core_wallet/core_wallet.repo';
import { TransferRepository, TransferService } from '../../../data/transfer';
import {
  TransactionRepository,
  TransactionService
} from '../../../data/transaction';
import { AdjutorService } from '../../../server/services/adjutor/adjutor.service';

const container = new Container({ skipBaseClassChecks: true });

// bind services
container.bind<UserService>(TYPES.UserService).to(UserService);
container.bind<IUserService>('IUserService').to(UserService);
container.bind<WalletService>(TYPES.WalletService).to(WalletService);
container.bind<NubanService>(TYPES.NubanService).to(NubanService);
container.bind<TransferService>(TYPES.TransferService).to(TransferService);
container
  .bind<TransactionService>(TYPES.TransactionService)
  .to(TransactionService);
container
  .bind<AdjutorService>(TYPES.AdjutorService)
  .to(AdjutorService);
  
// bind repositories
container.bind<BaseRepository<any>>(TYPES.BaseRepository).to(BaseRepository);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<WalletRepository>(TYPES.WalletRepository).to(WalletRepository);
container.bind<NubanRepository>(TYPES.NubanRepository).to(NubanRepository);
container
  .bind<ChannelRepository>(TYPES.ChannelRepository)
  .to(ChannelRepository);
container
  .bind<CoreWalletRepository>(TYPES.CoreWalletRepository)
  .to(CoreWalletRepository);
container
  .bind<TransferRepository>(TYPES.TransferRepository)
  .to(TransferRepository);
container
  .bind<TransactionRepository>(TYPES.TransactionRepository)
  .to(TransactionRepository);

export default container;
