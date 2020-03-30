import { Router } from 'express';
import { Joi, Segments, celebrate } from 'celebrate';

import AppointmentController from './app/controllers/AppointmentController';

const routes = new Router();

routes.post(
  '/appointment',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      provider_id: Joi.number().required(),
      date: Joi.date().required(),
    }),
  }),
  AppointmentController.store
);
routes.get('/appointment', AppointmentController.index);
routes.delete('/appointment/:id', AppointmentController.delete);

export default routes;
