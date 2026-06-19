import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

const predictionSchema = Joi.object({
  text: Joi.string().min(1).max(10000).required(),
  categories: Joi.array().items(Joi.string()).optional(),
  prompt: Joi.string().min(1).max(5000).optional(),
  maxLength: Joi.number().integer().min(1).max(1000).optional(),
  temperature: Joi.number().min(0).max(2).optional()
});

export const validatePredictionRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = predictionSchema.validate(req.body);
  
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: {
        message: 'Validation error',
        details: error.details.map(d => d.message)
      },
      timestamp: new Date().toISOString()
    });
  }
  
  next();
};
