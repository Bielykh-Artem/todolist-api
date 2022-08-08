import * as express from "express";
import { todosRouter } from "./todos";

const protectedRouter = express.Router();

protectedRouter.use("/todos", todosRouter);

export default protectedRouter;
