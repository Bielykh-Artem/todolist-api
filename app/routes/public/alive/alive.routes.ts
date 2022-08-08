import * as express from "express";
import * as buffer from "buffer";

const aliveRouter = express.Router();

aliveRouter.get("/", (_, res) => {
  const uptime_minutes = process.uptime() / 60;
  const current_date = new Date().toISOString();
  const start_date = new Date(
    Date.now() - process.uptime() * 1000
  ).toISOString();

  res.send({
    uptime_minutes,
    current_date,
    start_date,
    bufferSize: buffer.constants.MAX_LENGTH,
  });
});

export default aliveRouter;
