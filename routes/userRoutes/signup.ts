import express, { Request, Response} from 'express';
import { User } from '../../models/users';
import { Auth } from '../../utils/auth';
import { check } from '../../utils/check';
import { v4 as uuidv4 } from "uuid";
const bcrypt = require('bcrypt')

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    try {
        // Check if email exists
        const checkEmail = await check.email(req.body.email)
        if (checkEmail) {
            res.status(400).json({message: "Email already exists, please login"});
            return;
        }
        // Create a hashed password
        const hashedPassword = await bcrypt.hash(req.body.password, 16)
        // Create an ID
        const id = uuidv4()
        // Create a new user
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
            userName: req.body.userName,
            userId: id
        })
        // Save the new user
        const newUser = user.save();
        // Assign an Access token and refresh token
        const accessToken = Auth.signToken({id: (await newUser).userId})
        const refreshToken = Auth.signRefreshToken({id: (await newUser).userId})
        res.status(200).json({accessToken: accessToken, refreshToken: refreshToken})
        // Respond with 200 and send back the tokens
    } catch (error: any) {
        res.status(500).json(error)
    }
})

export default router;