import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  request,
  response,
  requestBody
} from 'inversify-express-utils';
import { TYPES } from '@app/common/config/ioc/types';
import gateman from '@app/common/services/gateman';
import { BaseController } from '../base';
import { default as Validator } from '@app/server/middlewares/validator';
import { WalletService } from '@app/data/wallet';
import { fundWallet } from './wallet.validator';
import { FundWalletDTO, FreezeWalletDTO } from './wallet.dto';

@controller('/wallet')
export default class WalletController extends BaseController {
  constructor(
    @inject(TYPES.WalletService) private walletService: WalletService
  ) {
    super();
  }

  /**
   * Gets a user's wallet
   */
  @httpGet('/', gateman.guard('user'))
  async getWallet(@request() req: Request, @response() res: Response) {
    try {
      this.handleSuccess(
        req,
        res,
        this.walletService.format(await this.walletService.getWallet(req.user))
      );
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Funds a wallet.
   * This should be a back office action ideally. But this would be left open to users for demo purposes
   *
   * NOTE: Balances are received and stored in kobo
   */
  @httpPost('/fund', gateman.guard('user'), Validator(fundWallet))
  async fundWallet(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: FundWalletDTO
  ) {
    try {
      body.user = req.user;
      const wallet = await this.walletService.fundWallet(body);
      this.handleSuccess(req, res, wallet);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Freezes or unfreezes a wallet
   *
   * Should also be a back office action, but we will open this up to the user for demo purposes
   */
  @httpPost('/freeze', gateman.guard('user'))
  async freezeWallet(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: FreezeWalletDTO
  ) {
    try {
      body.user = req.user;
      body.action = 'freeze';
      const wallet = await this.walletService.freezeOrUnfreezeUserWallet(body);
      this.handleSuccess(req, res, wallet);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Unfreezes or unfreezes a wallet
   *
   * Should also be a back office action, but we will open this up to the user for demo purposes
   */
  @httpPost('/unfreeze', gateman.guard('user'))
  async unfreezeWallet(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: FreezeWalletDTO
  ) {
    try {
      body.user = req.user;
      body.action = 'unfreeze';
      const wallet = await this.walletService.freezeOrUnfreezeUserWallet(body);
      this.handleSuccess(req, res, wallet);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }
}
