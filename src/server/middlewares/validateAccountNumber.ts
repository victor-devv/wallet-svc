import { NextFunction, Request, Response } from 'express';
import { WalletNotFoundError } from '../controllers/base';
import {
  validNigerianAccountNumber,
  isDcAccountNumber
} from '@app/data/base/constants';

export default function validateAccountNumber(field: 'body' | 'params') {
  return async (req: Request, res: Response, next: NextFunction) => {
    const fieldValue = field === 'body' ? 'recipient' : 'account_number';
    const account_number = req[field][fieldValue];
    if (
      !validNigerianAccountNumber(account_number) ||
      !isDcAccountNumber(account_number)
    )
      throw new WalletNotFoundError(account_number);
    next();
  };
}
