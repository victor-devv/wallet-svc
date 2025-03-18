import joi from 'joi';
import { transactionCategories } from '@app/data/transaction/transaction.constants';

export const makeInstantTransfer = joi.object({
  description: joi.string(),
  amount: joi.number().min(1).required(),
  recipient: joi.string().trim().required(),
  category: joi.string().valid(...transactionCategories)
});
