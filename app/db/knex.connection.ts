import { knex } from "knex";
import * as pg from "pg";
import { Model } from "objection";
import * as dotenv from "dotenv";

dotenv.config();

const knexConfig =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
Model.knex(knexConfig);
const db = knex(knexConfig);

db.raw("select 1+1 as result")
  .then(() => {
    console.log("Connection successfully completed");
  })
  .catch((err: Error) => console.log("Connection err: ", err));

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => {
  return parseFloat(value);
});

db.migrate
  .latest()
  .then((res: [string[]]) => console.log("Migrations OK", res))
  .catch((err: Error) => console.log("Migrations err: ", err));

// db.seed
//   .run()
//   .then((res: [string[]]) => console.log("Seeds OK", res))
//   .catch((err: Error) => console.log("Seeds err: ", err));

export default db;
