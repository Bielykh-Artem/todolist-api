import {
  composedPublicMiddleware,
  composedProtectedMiddleware,
} from "../middlewares";

import publicRouter from "./public";
import protectedRouter from "./private";

export const routingSchema = [
  {
    routes: publicRouter,
    middlewares: composedPublicMiddleware,
    prefix: "/api",
  },
  {
    routes: protectedRouter,
    middlewares: composedProtectedMiddleware,
    prefix: "/api",
  },
];
