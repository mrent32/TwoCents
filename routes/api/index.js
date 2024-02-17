import express from 'express';
const router = express.Router();
import userRoutes from './user-routes.js';
import thoughtRoutes from './thought-routes.js';

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

export default router;