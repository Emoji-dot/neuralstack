import { logger } from '../utils/logger';

export const classifyText = async (text: string, categories?: string[]) => {
  logger.info('Classifying text');
  
  // Simulated classification logic
  const mockCategories = categories || ['technology', 'business', 'sports', 'entertainment', 'science'];
  const randomIndex = Math.floor(Math.random() * mockCategories.length);
  
  return {
    text: text.substring(0, 100),
    prediction: mockCategories[randomIndex],
    confidence: 0.85 + Math.random() * 0.14,
    categories: mockCategories.map(cat => ({
      category: cat,
      probability: Math.random()
    })).sort((a, b) => b.probability - a.probability)
  };
};

export const analyzeSentiment = async (text: string) => {
  logger.info('Analyzing sentiment');
  
  // Simple sentiment analysis
  const sentiments = ['positive', 'negative', 'neutral'];
  const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic'];
  const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'poor', 'worst'];
  
  let sentiment = 'neutral';
  let score = 0.5;
  
  const lowerText = text.toLowerCase();
  
  const positiveCount = positiveWords.filter(word => lowerText.includes(word)).length;
  const negativeCount = negativeWords.filter(word => lowerText.includes(word)).length;
  
  if (positiveCount > negativeCount) {
    sentiment = 'positive';
    score = 0.7 + Math.random() * 0.3;
  } else if (negativeCount > positiveCount) {
    sentiment = 'negative';
    score = 0.1 + Math.random() * 0.3;
  }
  
  return {
    text: text.substring(0, 100),
    sentiment,
    score,
    confidence: 0.8 + Math.random() * 0.19,
    breakdown: {
      positive: positiveCount / (positiveCount + negativeCount + 1),
      negative: negativeCount / (positiveCount + negativeCount + 1),
      neutral: 1 / (positiveCount + negativeCount + 1)
    }
  };
};

export const classifyImage = async (imageUrl: string, topK: number) => {
  logger.info(`Classifying image: ${imageUrl}`);
  
  const classes = [
    'cat', 'dog', 'car', 'bicycle', 'person', 'tree', 
    'building', 'chair', 'table', 'computer', 'phone'
  ];
  
  const predictions = classes
    .map(cls => ({
      class: cls,
      confidence: Math.random()
    }))
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, topK);
  
  return {
    imageUrl,
    predictions,
    processingTime: Math.random() * 500 + 100
  };
};

export const generateText = async (prompt: string, maxLength: number, temperature: number) => {
  logger.info(`Generating text for prompt: ${prompt}`);
  
  const continuations = [
    'The future of artificial intelligence is bright and full of possibilities.',
    'Machine learning models continue to improve and revolutionize industries.',
    'Deep learning has transformed the way we approach complex problems.',
    'Neural networks are becoming increasingly sophisticated and powerful.'
  ];
  
  const generated = continuations[Math.floor(Math.random() * continuations.length)];
  
  return {
    prompt,
    generated,
    parameters: {
      maxLength,
      temperature
    },
    tokens: generated.split(' ').length
  };
};

export const extractEntities = async (text: string) => {
  logger.info('Extracting named entities');
  
  // Simple entity extraction
  const words = text.split(' ');
  const entities: Array<{ text: string; type: string; confidence: number }> = [];
  
  words.forEach(word => {
    if (word.length > 0 && word[0] === word[0].toUpperCase()) {
      entities.push({
        text: word.replace(/[.,!?;:]$/,''),
        type: Math.random() > 0.5 ? 'PERSON' : 'ORGANIZATION',
        confidence: 0.7 + Math.random() * 0.29
      });
    }
  });
  
  return {
    text: text.substring(0, 100),
    entities,
    count: entities.length
  };
};
