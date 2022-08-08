import * as express from "express";
import { createValidator } from "express-joi-validation";
import { errorHandlerMiddleware } from "../../../middlewares";

import {
  fetchTodosRequestHandler,
  fetchTodoRequestHandler,
  addTodoRequestHandler,
  editTodoRequestHandler,
  removeTodoRequestHandler,
} from "../../../controllers";

import { todosParams, addTodoBodySchema, editTodoBodySchema } from "./todos.validators"

const validator = createValidator();
const todosRouter = express.Router();

todosRouter.get(
  "/",
  fetchTodosRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.get(
  "/:id",
  validator.params(todosParams),
  fetchTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.post(
  "/",
  validator.body(addTodoBodySchema),
  addTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.put(
  "/:id",
  validator.params(todosParams),
  validator.body(editTodoBodySchema),
  editTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.delete(
  "/:id",
  validator.params(todosParams),
  removeTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

export default todosRouter;
