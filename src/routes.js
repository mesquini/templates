import express from 'express';
import multer from 'multer';

import multerConfig from './configs/multer';

import auth from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import {
  session,
  params,
  queryPage,
  post,
} from './app/middlewares/validations';

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/session', session, SessionController);
routes.post('/user', UserController.store);

routes.use(auth);

routes.get('/user', UserController.index);
routes.put('/user', UserController.update);
routes.delete('/user', UserController.delete);

export default routes;
