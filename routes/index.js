import express from 'express';
const router = express.Router();
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Whats your Two Cents?'));

export default router;