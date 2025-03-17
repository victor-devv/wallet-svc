import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  request,
  response
} from 'inversify-express-utils';
import { TYPES } from '@app/common/config/ioc/types';
import { BaseController } from '../base';
import { ChannelRepository } from '@app/data/channel';

@controller(
  '/channel'
)
export default class ChannelController extends BaseController {
  constructor(@inject(TYPES.ChannelRepository) private repo: ChannelRepository) {
    super();
  }

  /**
   * Gets account channels
   */
  @httpGet('/')
  async getChannels(@request() req: Request, @response() res: Response) {
    try {
      this.handleSuccess(req, res, await this.repo.all());
    } catch (err) {
      this.handleError(req, res, err);
    }
  }
}
