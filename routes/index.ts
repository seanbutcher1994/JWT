import express from "express";
import userRoutes from './userRoutes';
import dashboardRoutes from './dashboardRoutes'
import verifyToken from '../middleware/verifyToken'

const router = express.Router();

router.use('/user', userRoutes)
router.use('/dashboard', verifyToken, dashboardRoutes)

export default router;