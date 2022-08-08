import * as express from "express";
import * as dotenv from "dotenv";
import { routingSchema } from "./routes";
import "./db";

dotenv.config();

const app: express.Express = express();
app.use(express.json());

routingSchema.forEach(({ routes, middlewares, prefix }) => {
  middlewares ? app.use(prefix, middlewares, routes) : app.use(prefix, routes);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
