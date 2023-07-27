import express, { Request, Response } from 'express';
import { User } from '../../models/users';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        if (!users) {
            res.status(400).json({message: "No users"})
            return;
        }
        res.status(200).json({users: users})
    } catch (error: any) {
        res.status(500).json({message: error.message})
    }
})

export default router;