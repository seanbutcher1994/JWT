import express from 'express'
import getAllUsers from './getAllUsers'

const router = express.Router();

router.use('/getallusers', getAllUsers)

export default router;