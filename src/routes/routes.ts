import { Router } from 'express';

import { CreateUserController } from '@modules/users/controllers/CreateUserController';

const createUserController = new CreateUserController();

const routes = Router();

routes.post('/users', createUserController.handle);

export { routes };