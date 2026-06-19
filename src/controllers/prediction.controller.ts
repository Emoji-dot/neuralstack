import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { logger } from '../utils/logger';
import * as predictionService from '../services/prediction.service';

export const textClassification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text, categories } = req.body;
    
    logger.info(`Text classification request for: ${text.substring(0, 50)}...`);
    
    const result = await predictionService.classifyText(text, categories);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const sentimentAnalysis = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body;
    
    logger.info(`Sentiment analysis request for: ${text.substring(0, 50)}...`);
    
    const result = await predictionService.analyzeSentiment(text);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const imageClassification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { imageUrl, topK = 5 } = req.body;
    
    logger.info(`Image classification request for: ${imageUrl}`);
    
    const result = await predictionService.classifyImage(imageUrl, topK);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const textGeneration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { prompt, maxLength = 100, temperature = 0.7 } = req.body;
    
    logger.info(`Text generation request for prompt: ${prompt.substring(0, 50)}...`);
    
    const result = await predictionService.generateText(prompt, maxLength, temperature);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

export const namedEntityRecognition = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { text } = req.body;
    
    logger.info(`NER request for: ${text.substring(0, 50)}...`);
    
    const result = await predictionService.extractEntities(text);
    
    res.status(StatusCodes.OK).json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};
