import { Router } from 'express';
import {
  textClassification,
  sentimentAnalysis,
  imageClassification,
  textGeneration,
  namedEntityRecognition
} from '../controllers/prediction.controller';
import { validatePredictionRequest } from '../middleware/validators';

const router = Router();

/**
 * @route   POST /api/v1/predictions/text-classification
 * @desc    Classify text into predefined categories
 * @access  Public
 */
router.post('/text-classification', validatePredictionRequest, textClassification);

/**
 * @route   POST /api/v1/predictions/sentiment
 * @desc    Analyze sentiment of text (positive, negative, neutral)
 * @access  Public
 */
router.post('/sentiment', validatePredictionRequest, sentimentAnalysis);

/**
 * @route   POST /api/v1/predictions/image-classification
 * @desc    Classify images using pre-trained models
 * @access  Public
 */
router.post('/image-classification', imageClassification);

/**
 * @route   POST /api/v1/predictions/text-generation
 * @desc    Generate text based on input prompt
 * @access  Public
 */
router.post('/text-generation', validatePredictionRequest, textGeneration);

/**
 * @route   POST /api/v1/predictions/ner
 * @desc    Extract named entities from text
 * @access  Public
 */
router.post('/ner', validatePredictionRequest, namedEntityRecognition);

export default router;
