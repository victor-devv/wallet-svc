import { Container } from 'inversify';

// import controllers
import { TYPES } from './types';
import '../../../server/controllers';

import { UserService } from '../../../data/user/user.service';
import { WalletService } from '../../../data/wallet/wallet.service';
import { NubanService } from '../../../data/nuban/nuban.service';

import { BaseRepository } from '../../../data/base/base.repo';
import { UserRepository } from '../../../data/user/user.repo';
import { WalletRepository } from '../../../data/wallet/wallet.repo';
import { NubanRepository } from '../../../data/nuban/nuban.repo';
import { ChannelRepository } from '../../../data/channel/channel.repo';


const container = new Container({ skipBaseClassChecks: true });

// bind services
container.bind<UserService>(UserService).toSelf();
container.bind<WalletService>(TYPES.WalletService).to(WalletService);
container.bind<NubanService>(TYPES.NubanService).to(NubanService);


// bind repositories
container.bind<BaseRepository<any>>(TYPES.BaseRepository).to(BaseRepository);
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<WalletRepository>(TYPES.WalletRepository).to(WalletRepository);
container.bind<NubanRepository>(TYPES.NubanRepository).to(NubanRepository);
container.bind<ChannelRepository>(TYPES.ChannelRepository).to(ChannelRepository);

export default container;
