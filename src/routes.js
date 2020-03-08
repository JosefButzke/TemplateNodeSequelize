import { Router } from 'express';
import SessionController from './app/controller/SessionController';

const routes = new Router();

routes.get('/sessions', SessionController.index);

export default routes;