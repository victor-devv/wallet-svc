import Joi from 'joi';
import { states, lga as getLga } from '@app/data/location';
import { Request, Response, NextFunction } from 'express';
import logger from '@app/common/services/logger';
import HttpStatus from 'http-status-codes';
import { MetricsService } from '@app/server/services';

export const LocationValidatorRequired = Joi.object({
  longitude: Joi.string().trim().default("0"),
  latitude: Joi.string().trim().default("0"),
  street: Joi.string().trim().required(),
  state: Joi.string().trim().required().valid(...states),
  city: Joi.string().trim().required(),
  lga: Joi.string().trim().required()
});

export const LocationValidator = Joi.object({
  longitude: Joi.string().trim().default("0"),
  latitude: Joi.string().trim().default("0"),
  street: Joi.string().trim().required(),
  state: Joi.string().trim().valid(...states).required(),
  city: Joi.string().trim().required(),
  lga: Joi.string().trim()
}).required();

export function validateLGA(req: Request, res: Response, next: NextFunction) {
  const { state, lga } = req.body;

  const schema = Joi.string().trim().required().valid(...getLga(state));
  const { error } = schema.validate(lga);
  
  if (error) {
    res.jSend.error(
      { lga: error.message },
      'One or more validation errors occured',
      HttpStatus.UNPROCESSABLE_ENTITY
    );

    //@ts-ignore
    logger.logAPIError(req, res, { lga: error.message });
    MetricsService.record(req, res);
    return;
  }

  next();
}
