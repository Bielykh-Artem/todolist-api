import * as express from "express";
import * as dotenv from "dotenv";
import { routingSchema } from "./routes";
import "./db";
import * as path from "path";
import * as SwaggerUI from "swagger-ui-express";

dotenv.config();

const swaggerDocument = require("./swagger.json");
swaggerDocument.host =
  process.env.NODE_ENV === "local"
    ? `localhost:${process.env.PORT}`
    : `${process.env.SERVER_URL}`;

const app: express.Express = express();

app.use("/api/swagger", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());

routingSchema.forEach(({ routes, middlewares, prefix }) => {
  middlewares ? app.use(prefix, middlewares, routes) : app.use(prefix, routes);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
  );
});
