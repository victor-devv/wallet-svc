import { Request, Response } from 'express';
import {
  controller,
  httpGet,
  request,
  response,
} from 'inversify-express-utils';
import { 
  BaseController, 
} from '../base';

@controller('/user')
export default class UserController extends BaseController {

  @httpGet(
    '/',
  )
  async getUser(@request() req: Request, @response() res: Response) {
    try {
      this.handleSuccess(req, res, 'hello world');
    } catch (err) {
      this.handleError(req, res, err);
    }
  }
}
