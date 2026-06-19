import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../utils/logger';
import * as dataService from '../services/data.service';

export const preprocessData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, options } = req.body;
    
    logger.info('Preprocessing data request');
    
    const result = await dataService.preprocess(data, options);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const augmentData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, augmentationType, count } = req.body;
    
    logger.info(`Augmenting data with type: ${augmentationType}`);
    
    const result = await dataService.augment(data, augmentationType, count);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const validateData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data, schema } = req.body;
    
    logger.info('Validating data quality');
    
    const result = await dataService.validate(data, schema);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const getDataStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { data } = req.body;
    
    logger.info('Computing data statistics');
    
    const stats = await dataService.computeStatistics(data);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: stats,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
