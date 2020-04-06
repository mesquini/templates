import express from 'express';
import multer from 'multer';

import multerConfig from './configs/multer';

import auth from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';

import {
  session,
  params,
  queryPage,
  post,
} from './app/middlewares/validations';

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/sessions', session, SessionController);

routes.use(auth);

export default routes;
