import { Response, Request, NextFunction } from "express";
import {
  fetchTodos,
  fetchTodoByID,
  addTodo,
  editTodoByID,
  removeTodoByID,
} from "../services";

export const fetchTodosRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await fetchTodos();
    res.send(todos);
  } catch (err) {
    next(err);
  }
};

export const fetchTodoRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const todo = await fetchTodoByID(id);
    res.send(todo);
  } catch (err) {
    next(err);
  }
};

export const addTodoRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const todo = await addTodo(body);
    res.send(todo);
  } catch (err) {
    next(err);
  }
};

export const editTodoRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const todo = await editTodoByID(id, body);
    res.send(todo);
  } catch (err) {
    next(err);
  }
};

export const removeTodoRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const status = await removeTodoByID(id);

    res.send({ id, status });
  } catch (err) {
    next(err);
  }
};
