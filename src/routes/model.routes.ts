import { Router } from 'express';
import {
  getAvailableModels,
  getModelInfo,
  trainModel,
  evaluateModel
} from '../controllers/model.controller';

const router = Router();

/**
 * @route   GET /api/v1/models
 * @desc    Get list of available models
 * @access  Public
 */
router.get('/', getAvailableModels);

/**
 * @route   GET /api/v1/models/:modelId
 * @desc    Get information about a specific model
 * @access  Public
 */
router.get('/:modelId', getModelInfo);

/**
 * @route   POST /api/v1/models/train
 * @desc    Train a new model with provided data
 * @access  Public
 */
router.post('/train', trainModel);

/**
 * @route   POST /api/v1/models/:modelId/evaluate
 * @desc    Evaluate model performance
 * @access  Public
 */
router.post('/:modelId/evaluate', evaluateModel);

export default router;
