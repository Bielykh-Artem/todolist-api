import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  return knex.schema.createTable("todos", table => {
    table.increments();

    table.string("title").notNullable()
    table.boolean("is_completed").defaultTo(false)

    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.string("created_by");

    table.timestamp("updated_at");
    table.string("updated_by");

    table.boolean("is_active").notNullable().defaultTo(true);
  })
}


export const down = async (knex: Knex): Promise<void> => {
  return knex.schema.dropTable("todos");
}

