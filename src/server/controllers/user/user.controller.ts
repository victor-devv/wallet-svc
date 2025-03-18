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
import gateman from '@app/common/services/gateman';
import logger from '@app/common/services/logger';
import { BaseController } from '../base';
import { default as Validator } from '@app/server/middlewares/validator';
import { TYPES } from '@app/common/config/ioc/types';
import {
  // login,
  signup
} from './user.validator';
import {
  // LoginDTO,
  SignupDTO,
} from './user.dto';
import { UserService } from '@app/data/user/user.service';

@controller('/user')
export default class UserController extends BaseController {
  constructor(@inject(TYPES.UserService) private userService: UserService) {
    super();
  }

  @httpGet('/')
  async getUser(@request() req: Request, @response() res: Response) {
    try {
      this.handleSuccess(req, res, 'hello world');
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Creates a user account and makes a call to the wallet
   * service to create a wallet for the user.
   */
  @httpPost('/', Validator(signup))
  async signup(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: SignupDTO
  ) {
    try {
      if (!body.channel) body.channel = 'demo_credit';

      const { user, wallet } = await this.userService.register(body);

      const token = await gateman.createSession({id: user.id});

      const data = { user, wallet, token };

      this.handleSuccess(req, res, data);
    } catch (err) {
      logger.error(err);
      if (!err.message)
        err.message =
          'We encountered an error while processing your request. Please try again.';
      this.handleError(req, res, err);
    }
  }
}
