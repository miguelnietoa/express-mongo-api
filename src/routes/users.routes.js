import { Router } from 'express';
import * as UsersController from '../controllers/user.controller.js';

const router = Router();

router.get('/', UsersController.getAllUsers);

router.post('/', UsersController.createUser);

export default router;
