import request from 'supertest';
import app from '../src/index';

describe('API Endpoints', () => {
  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/v1', () => {
    it('should return API information', async () => {
      const response = await request(app).get('/api/v1');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name', 'NeuralStack API');
      expect(response.body).toHaveProperty('endpoints');
    });
  });

  describe('GET /api/v1/models', () => {
    it('should return list of available models', async () => {
      const response = await request(app).get('/api/v1/models');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data.length).toBeGreaterThan(0);
    });
  });

  describe('POST /api/v1/predictions/sentiment', () => {
    it('should analyze sentiment of text', async () => {
      const response = await request(app)
        .post('/api/v1/predictions/sentiment')
        .send({ text: 'This is a great product!' });
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('sentiment');
      expect(response.body.data).toHaveProperty('score');
    });

    it('should return 400 for invalid request', async () => {
      const response = await request(app)
        .post('/api/v1/predictions/sentiment')
        .send({});
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('404 Handler', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request(app).get('/non-existent-route');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('success', false);
    });
  });
});
