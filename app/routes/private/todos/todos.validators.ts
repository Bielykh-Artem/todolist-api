import * as Joi from "joi";

export const todosParams = Joi.object({
  id: Joi.string().required(),
});

export const editTodoBodySchema = Joi.object({
  title: Joi.string().optional(),
  is_completed: Joi.string().optional(),
});

export const addTodoBodySchema = Joi.object({
  title: Joi.string().required(),
});