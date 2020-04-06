import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import { errors } from 'celebrate';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan('dev'));
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
