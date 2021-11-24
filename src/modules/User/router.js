import { Router } from 'express';
import userController from './controller';

const userRouter = Router();

userRouter
    .route('/users')
    .get(userController.getAll)
    .post(userController.register);

userRouter.route('/users/auth').post(userController.login);

export default userRouter;