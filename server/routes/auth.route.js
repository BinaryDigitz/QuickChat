import { Router } from "express";
import { createUser, loginUser } from '../controllers/auth.controllers.js'


const authRouter = Router()

authRouter.post('/sign-up', createUser)

authRouter.post('/sign-in', loginUser)

export default authRouter;