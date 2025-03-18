import { injectable, inject } from 'inversify';
import { Knex } from 'knex';
import assert from 'assert';
import { padStart } from 'lodash';
import redis from '@app/common/services/redis';
import { TYPES } from '@app/common/config/ioc/types';
import {
  ChannelNotFoundError,
  NubanRangeError
} from '@app/server/controllers/base';
import { AccountChannelBlock, NubanRepository } from '.';
import { WalletRepository } from '../wallet';

@injectable()
export class NubanService {
  constructor(
    @inject(TYPES.NubanRepository) private repo: NubanRepository,
    @inject(TYPES.WalletRepository) private walletrepo: WalletRepository
  ) {}

  async giveNuban(channel: string, trx: Knex.Transaction) {
    const blocks: AccountChannelBlock[] = JSON.parse(
      await redis.get('ACCOUNT_CHANNELS_BLOCKS')
    );

    const channelBlock = blocks.find((it) => it.name === channel);
    if (!channelBlock) throw new ChannelNotFoundError(channel);

    const { min, max } = channelBlock;

    const lastWalletInChannel = await this.walletrepo.getLastWalletForChannel(
      channel,
      trx
    );

    const lastNubanInChannel =
      lastWalletInChannel?.account.account_number ?? min;

    const lastNubanSerial = +lastNubanInChannel - min;
    assert(!Number.isNaN(lastNubanSerial), new Error('lastNubanSerial is NaN'));

    const nextNubanSerial = lastNubanSerial + 1;

    if (nextNubanSerial > max - min) throw new NubanRangeError();

    const account_number = padStart(`${min + nextNubanSerial}`, 9, '0');

    return await this.repo.createNuban(account_number, trx);
  }

  async updateNubanAssignment(
    id: string,
    wallet_id: number,
    trx: Knex.Transaction
  ) {
    return await this.repo.update(
      { ulid: id },
      { assigned_to: wallet_id },
      { trx }
    );
  }
}
