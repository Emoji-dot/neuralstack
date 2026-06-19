# NeuralStack API Documentation

Base URL: `http://localhost:3000/api/v1`

## Authentication
Currently, the API is public. Authentication will be added in future versions.

## Rate Limiting
- 100 requests per 15 minutes per IP address
- Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-06-19T10:30:00.000Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error description"
  },
  "timestamp": "2024-06-19T10:30:00.000Z"
}
```

## Endpoints

### Health Check
```http
GET /health
```

**Response**
```json
{
  "status": "healthy",
  "timestamp": "2024-06-19T10:30:00.000Z",
  "uptime": 12345,
  "environment": "production"
}
```

---

### API Information
```http
GET /api/v1
```

**Response**
```json
{
  "name": "NeuralStack API",
  "version": "1.0.0",
  "description": "AI/ML API service",
  "endpoints": {
    "predictions": "/api/v1/predictions",
    "models": "/api/v1/models",
    "data": "/api/v1/data"
  }
}
```

---

## Predictions

### Text Classification
```http
POST /api/v1/predictions/text-classification
```

**Request Body**
```json
{
  "text": "Your text to classify",
  "categories": ["tech", "business", "sports"]
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "text": "Your text to classify",
    "prediction": "tech",
    "confidence": 0.92,
    "categories": [
      { "category": "tech", "probability": 0.92 },
      { "category": "business", "probability": 0.05 },
      { "category": "sports", "probability": 0.03 }
    ]
  }
}
```

### Sentiment Analysis
```http
POST /api/v1/predictions/sentiment
```

**Request Body**
```json
{
  "text": "This product is amazing!"
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "text": "This product is amazing!",
    "sentiment": "positive",
    "score": 0.95,
    "confidence": 0.89,
    "breakdown": {
      "positive": 0.95,
      "negative": 0.03,
      "neutral": 0.02
    }
  }
}
```

### Image Classification
```http
POST /api/v1/predictions/image-classification
```

**Request Body**
```json
{
  "imageUrl": "https://example.com/image.jpg",
  "topK": 5
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "imageUrl": "https://example.com/image.jpg",
    "predictions": [
      { "class": "cat", "confidence": 0.95 },
      { "class": "dog", "confidence": 0.03 }
    ],
    "processingTime": 245
  }
}
```

### Text Generation
```http
POST /api/v1/predictions/text-generation
```

**Request Body**
```json
{
  "prompt": "The future of AI is",
  "maxLength": 100,
  "temperature": 0.7
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "prompt": "The future of AI is",
    "generated": "bright and full of possibilities...",
    "parameters": {
      "maxLength": 100,
      "temperature": 0.7
    },
    "tokens": 45
  }
}
```

### Named Entity Recognition
```http
POST /api/v1/predictions/ner
```

**Request Body**
```json
{
  "text": "Apple Inc. is located in California."
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "text": "Apple Inc. is located in California.",
    "entities": [
      { "text": "Apple", "type": "ORGANIZATION", "confidence": 0.95 },
      { "text": "California", "type": "LOCATION", "confidence": 0.92 }
    ],
    "count": 2
  }
}
```

---

## Models

### List Available Models
```http
GET /api/v1/models
```

**Response**
```json
{
  "success": true,
  "data": [
    {
      "id": "text-clf-001",
      "name": "Text Classifier",
      "type": "classification",
      "version": "1.0.0",
      "accuracy": 0.92,
      "created": "2024-01-15",
      "status": "active"
    }
  ],
  "count": 5
}
```

### Get Model Information
```http
GET /api/v1/models/:modelId
```

**Response**
```json
{
  "success": true,
  "data": {
    "id": "text-clf-001",
    "name": "Text Classifier",
    "type": "classification",
    "description": "Advanced classification model with 92% accuracy",
    "parameters": {
      "layers": 12,
      "hiddenSize": 768,
      "attentionHeads": 12
    },
    "performance": {
      "inferenceTime": 25.5,
      "throughput": 850
    }
  }
}
```

### Train New Model
```http
POST /api/v1/models/train
```

**Request Body**
```json
{
  "modelType": "classification",
  "trainingData": [...],
  "hyperparameters": {
    "learningRate": 0.001,
    "batchSize": 32,
    "epochs": 10
  }
}
```

### Evaluate Model
```http
POST /api/v1/models/:modelId/evaluate
```

**Request Body**
```json
{
  "testData": [...]
}
```

**Response**
```json
{
  "success": true,
  "data": {
    "modelId": "text-clf-001",
    "metrics": {
      "accuracy": 0.92,
      "precision": 0.90,
      "recall": 0.88,
      "f1Score": 0.89
    },
    "confusionMatrix": [[85, 10, 5], [12, 78, 10], [8, 15, 77]],
    "testDataSize": 1000
  }
}
```

---

## Data Processing

### Preprocess Data
```http
POST /api/v1/data/preprocess
```

### Augment Data
```http
POST /api/v1/data/augment
```

### Validate Data
```http
POST /api/v1/data/validate
```

### Get Data Statistics
```http
POST /api/v1/data/stats
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request |
| 404  | Not Found |
| 429  | Too Many Requests |
| 500  | Internal Server Error |

## Examples

See `/examples` directory for code samples in various languages:
- JavaScript/Node.js
- Python
- cURL
- Postman Collection
