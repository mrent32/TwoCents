import express from 'express';
const router = express.Router();
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

export default router;