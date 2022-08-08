import { TodoModel, Todo, todosDefaultModifie } from "../models";
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
    .returning(todosDefaultModifie)
    .skipUndefined();
};

export const editTodoByID = async (
  id: string,
  data: PartialModelObject<Todo>
): Promise<Todo> => {
  return TodoModel.query()
    .update({ ...data, updated_at: new Date() })
    .where({ id })
    .returning(todosDefaultModifie)
    .skipUndefined()
    .first();
};

export const removeTodoByID = async (id: string): Promise<number> => {
  return TodoModel.query().deleteById(id);
};
