import {Request, Response, NextFunction} from "express";
const jwt = require('jsonwebtoken')

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Pull token from the headers
    const token = req.headers.token as string;
    // if there is no token or it's undefined, return 401 status and Unauthorized message
    if (!token || token === undefined) {
        return res.status(401).json({message: "Unauthorized request"})
    }
    try {
        // if there is a token decode it
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // if the decoded token matches the secret go next()
        if (decodedToken) {
            next()
        } else {
            // if it doesn't match, return 401 and and return Unauthorized message
            return res.status(401).json({ message: "Unauthorized request"})
        }
        
    } catch (error: any) {
        return res.status(500).json({message: error.message})
    }
}

export default verifyToken