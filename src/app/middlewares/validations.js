import { Joi, Segments, celebrate } from 'celebrate';

export function session() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  });
}

export function post() {
  return celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required().min(15),
      value: Joi.number().required(),
    }),
  });
}

export function authorization() {
  return celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  });
}

export function params(param) {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      [param]: Joi.string().required(),
    }),
  });
}

export function queryPage() {
  return celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  });
}
