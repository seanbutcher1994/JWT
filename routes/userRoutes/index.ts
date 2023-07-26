import express from "express";
import loginRoute from './login';
import signUpRoute from './signup';
import refreshToken from './refreshToken';

const router = express.Router();

router.use('/login', loginRoute)
router.use("/signup", signUpRoute)
router.use("/refreshtoken", refreshToken)

export default router;