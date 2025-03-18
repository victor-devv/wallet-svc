import { Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
  request,
  response,
  requestBody
} from 'inversify-express-utils';
import gateman from '@app/common/services/gateman';
import { BaseController } from '../base';
import { default as Validator } from '@app/server/middlewares/validator';
import { validateAppBuildNumber } from '@app/server/middlewares/validateAppBuildNumber';
import { TYPES } from '@app/common/config/ioc/types';
import { login, signup, transactionPin } from './user.validator';
import { LoginDTO, SignupDTO, UpdatePinDTO as PinDTO } from './user.dto';
import { UserService } from '@app/data/user/user.service';

@controller('/user')
export default class UserController extends BaseController {
  constructor(@inject(TYPES.UserService) private userService: UserService) {
    super();
  }

  @httpGet('/', gateman.guard('user'))
  async getUser(@request() req: Request, @response() res: Response) {
    try {
      const user = await this.userService.getUserAccount(req.user);
      this.handleSuccess(req, res, user);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Creates a user account and wallet.
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

      const token = await gateman.createSession({ id: user.id });

      const data = { user, wallet, token };

      this.handleSuccess(req, res, data);
    } catch (err) {
      if (!err.message)
        err.message =
          'We encountered an error while processing your request. Please try again.';
      this.handleError(req, res, err);
    }
  }

  /**
   * Logs the user in using their phone number and password
   */
  @httpPost('/login', validateAppBuildNumber, Validator(login))
  async login(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: LoginDTO
  ) {
    try {
      const { user, wallet, account_access } = await this.userService.signIn(
        body
      );

      const token = await gateman.createSession({ id: user.id });

      this.handleSuccess(req, res, { user, wallet, token, account_access });
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Sets a users's transaction PIN.
   * It is expected that a user would set a PIN after the user creation screen in a typical on-boarding flow
   */
  @httpPut('/transaction/pin', gateman.guard('user'), Validator(transactionPin))
  async setTransactionPin(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: PinDTO
  ) {
    try {
      const updatedUser = await this.userService.setPin(req.user, body.pin);

      this.handleSuccess(req, res, updatedUser);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }

  /**
   * Validates a users's transaction PIN.
   */
  @httpPost(
    '/transaction/pin',
    gateman.guard('user'),
    Validator(transactionPin)
  )
  async validateTransactionPin(
    @request() req: Request,
    @response() res: Response,
    @requestBody() body: PinDTO
  ) {
    try {
      const isPinValid = await this.userService.validatePin(req.user, body.pin);

      this.handleSuccess(req, res, isPinValid);
    } catch (err) {
      this.handleError(req, res, err);
    }
  }
}
