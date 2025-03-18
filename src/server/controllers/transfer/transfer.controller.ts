import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpPost,
  response,
  requestBody,
  request
} from 'inversify-express-utils';
import gateman from '@app/common/services/gateman';
import { TYPES } from '@app/common/config/ioc/types';
import { BaseController } from '../base';
import Validator from '../../middlewares/validator';
import validateAccountNumber from '@app/server/middlewares/validateAccountNumber';
import { makeInstantTransfer } from './transfer.validator';
import { TransferDTO } from './transfer.dto';
import { TransferService } from '@app/data/transfer';

/**
 * Transfer controller class. This handles instant transfers
 */
@controller('/transfer')
export default class TransferController extends BaseController {
  constructor(
    @inject(TYPES.TransferService) private transferService: TransferService
  ) {
    super();
  }

  /**
   * Transfers money from one DemoCredit account to another
   */
  @httpPost(
    '/',
    gateman.guard('user'),
    Validator(makeInstantTransfer),
    validateAccountNumber('body')
  )
  async instantTransfer(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: TransferDTO
  ) {
    try {
      const { sender, transfer } = await this.transferService.transferMoney(req.user, body)
  
      this.handleSuccess(req, res, {
        wallet: sender,
        transfer_reference: transfer.reference
      });
    } catch (err) {
      this.handleError(req, res, err);
    }
  }
}
