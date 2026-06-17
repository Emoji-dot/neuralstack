import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'NeuralStack API - AI/ML Service' });
});

app.listen(PORT, () => {
  console.log(`NeuralStack running on port ${PORT}`);
});
