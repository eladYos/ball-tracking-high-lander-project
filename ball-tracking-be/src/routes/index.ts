import express from 'express';

import MessageResponse from '../interfaces/MessageResponse.interface';
import emojis from './goal-position';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

export default router;
