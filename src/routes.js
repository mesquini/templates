import express from 'express';
import multer from 'multer';
import multerConfig from './configs/multer';
import auth from './app/middlewares/auth';
import { params, queryPage, post } from './app/middlewares/validations';

const routes = express.Router();
const upload = multer(multerConfig);

routes.use(auth);

export default routes;
