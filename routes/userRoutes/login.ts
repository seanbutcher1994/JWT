import express, { Request, Response} from 'express';
import { User } from '../../models/users';
import { Auth } from '../../utils/auth';
import bcrypt from 'bcrypt'

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const user = (await User.findOne({ email: req.body.email}));
        if (!user) {
            res.status(400).json({ message: "Incorrect Email, please try again"});
            return;
        }
        const matchPassword = await bcrypt.compare(req.body.password)
        if(!matchPassword){
            res.status(400).json({ message: "Incorrect password, please try again"})
            return;
        }
        const accessToken = Auth.signToken({id: user.userId})
        const refreshToken = Auth.signRefreshToken({id: user.userId})
        res.status(200).json({message: "Login Successful!", accessToken: accessToken, refreshToken: refreshToken})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

export default router;
