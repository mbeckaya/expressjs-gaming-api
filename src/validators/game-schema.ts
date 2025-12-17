import Joi from 'joi';

export const gameSchema = Joi.object({
    title: Joi.string().required(),
    platform: Joi.string().required(),
    isPhysical: Joi.boolean().required(),
    isDigital: Joi.boolean().required(),
    genre: Joi.string().required(),
    publisher: Joi.string().required(),
    release: Joi.number().required(),
});