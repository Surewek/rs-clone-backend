import { Router } from 'express';

const userRouter = Router();

userRouter.post('./users');
userRouter.get('./users/login');
userRouter.get('./users/logout');
userRouter.get('./users/:userEmail');
userRouter.put('./users/:userEmail');
userRouter.delete('./users/:userEmail');

export default userRouter;
