import { Router } from 'express';
import {
  preprocessData,
  augmentData,
  validateData,
  getDataStats
} from '../controllers/data.controller';

const router = Router();

/**
 * @route   POST /api/v1/data/preprocess
 * @desc    Preprocess data for training
 * @access  Public
 */
router.post('/preprocess', preprocessData);

/**
 * @route   POST /api/v1/data/augment
 * @desc    Augment training data
 * @access  Public
 */
router.post('/augment', augmentData);

/**
 * @route   POST /api/v1/data/validate
 * @desc    Validate data quality
 * @access  Public
 */
router.post('/validate', validateData);

/**
 * @route   POST /api/v1/data/stats
 * @desc    Get statistical analysis of data
 * @access  Public
 */
router.post('/stats', getDataStats);

export default router;
