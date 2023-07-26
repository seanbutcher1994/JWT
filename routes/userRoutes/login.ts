import express, { Request, Response} from 'express';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router;
