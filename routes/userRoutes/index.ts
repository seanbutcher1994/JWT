import express from "express";
import loginRoute from './login'
import signUpRoute from './signup'
const router = express.Router();

router.use('/login', loginRoute)
router.use("/signup", signUpRoute)

export default router;