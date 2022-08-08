import { QueryBuilderType } from "objection";
import { CommonModel } from "./";
import { knexConnection } from "../db";

export class Todo extends CommonModel {
  static get tableName() {
    return "todos";
  }

  titile: string;
  is_completed: boolean;

  static modifiers = {
    default(builder: QueryBuilderType<any>) {
      builder.select("id", "title", "is_completed", "created_at");
    },
  };
}

export const TodoModel = Todo.bindKnex(knexConnection);
