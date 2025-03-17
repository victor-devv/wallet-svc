import { BaseRepository } from '../base';
import { Channel } from './channel.model';

export class ChannelRepository extends BaseRepository<Channel> {
  constructor() {
    super('Channel', 'channels');
  }
}

/**
 * Channel Repository Interface
 */
export const ChannelRepo = new ChannelRepository();
export default new ChannelRepository();

