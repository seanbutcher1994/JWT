import express, { Request, Response } from "express";
import { Auth } from "../../utils/auth";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    try {
        // Verify the refresh token
        const decodedToken = Auth.verifyRefreshToken(refreshToken);
        if (!decodedToken) {
            // If no valid token return 401 status and message
            res.status(401).json({message: "invalid refresh token"})
            return;
        }
        const accessToken = Auth.signToken({id: decodedToken.id})
        const newRefreshToken = Auth.signRefreshToken({ id: decodedToken.id});
        res.status(200).json({accessToken, newRefreshToken})
    } catch (err: any) {
        console.error("Error: ", err)
        res.status(500).json({message: err.message})
    }
})

export default router;