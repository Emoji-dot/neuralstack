import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../utils/logger';
import * as modelService from '../services/model.service';

export const getAvailableModels = async (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info('Fetching available models');
    
    const models = await modelService.listModels();
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: models,
      count: models.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const getModelInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelId } = req.params;
    
    logger.info(`Fetching info for model: ${modelId}`);
    
    const modelInfo = await modelService.getModelDetails(modelId);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: modelInfo,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const trainModel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelType, trainingData, hyperparameters } = req.body;
    
    logger.info(`Training model of type: ${modelType}`);
    
    const result = await modelService.trainNewModel(modelType, trainingData, hyperparameters);
    
    res.status(StatusCodes.CREATED).json({
      success: true,
      data: result,
      message: 'Model training started successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const evaluateModel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { modelId } = req.params;
    const { testData } = req.body;
    
    logger.info(`Evaluating model: ${modelId}`);
    
    const evaluation = await modelService.evaluateModelPerformance(modelId, testData);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: evaluation,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
