import { TodoModel, Todo } from "../models";
import { PartialModelObject } from "objection";

export const fetchTodos = async (): Promise<Todo[]> => {
  return TodoModel.query()
    .modify("default")
    .where({ is_active: true })
    .skipUndefined();
};

export const fetchTodoByID = async (id: string): Promise<Todo> => {
  return TodoModel.query().modify("default").findOne({ id });
};

export const addTodo = async (
  data: PartialModelObject<Todo>
): Promise<Todo> => {
  return TodoModel.query()
    .insert(data)
    .returning(["id", "title", "is_completed", "created_at"])
    .skipUndefined();
};

export const editTodoByID = async (
  id: string,
  data: PartialModelObject<Todo>
): Promise<Todo> => {
  return TodoModel.query()
    .update(data)
    .where({ id })
    .returning(["id", "title", "is_completed", "created_at"])
    .skipUndefined()
    .first();
};

export const removeTodoByID = async (id: string): Promise<number> => {
  return TodoModel.query().deleteById(id);
};
