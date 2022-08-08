import * as express from "express";
// import { createValidator } from "express-joi-validation";
import { errorHandlerMiddleware } from "../../../middlewares";

import {
  fetchTodosRequestHandler,
  fetchTodoRequestHandler,
  addTodoRequestHandler,
  editTodoRequestHandler,
  removeTodoRequestHandler,
} from "../../../controllers";

// const validator = createValidator();
const todosRouter = express.Router();

todosRouter.get(
  "/",
  fetchTodosRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.get(
  "/:id",
  fetchTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.post(
  "/",
  addTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.put(
  "/:id",
  editTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

todosRouter.delete(
  "/:id",
  removeTodoRequestHandler as express.RequestHandler,
  errorHandlerMiddleware
);

export default todosRouter;
