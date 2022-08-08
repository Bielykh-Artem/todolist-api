import * as express from "express";

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
    start_date
  });
});

export default aliveRouter;
