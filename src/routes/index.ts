import { Router } from 'express';
import predictionRoutes from './prediction.routes';
import modelRoutes from './model.routes';
import dataRoutes from './data.routes';

const router = Router();

// Mount routes
router.use('/predictions', predictionRoutes);
router.use('/models', modelRoutes);
router.use('/data', dataRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    name: 'NeuralStack API',
    version: '1.0.0',
    description: 'AI/ML API service with neural network capabilities',
    endpoints: {
      predictions: '/api/v1/predictions',
      models: '/api/v1/models',
      data: '/api/v1/data',
      health: '/health'
    }
  });
});

export default router;
