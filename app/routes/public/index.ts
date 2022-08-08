import * as express from "express";
import { aliveRouter } from "./alive";

const publicRouter = express.Router();

publicRouter.use("/alive", aliveRouter);

export default publicRouter;
