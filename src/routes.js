import { Router } from 'express';
import SessionController from './app/controller/SessionController';
import UserController from './app/controller/UserController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/register', UserController.store);

export default routes;