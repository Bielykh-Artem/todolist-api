import { compose } from "compose-middleware";
import { RequestHandler } from "express";
import { authHandlerMiddleware } from "./auth.middleware";
import { errorHandlerMiddleware } from "./error.middleware";

export * from "./auth.middleware";
export * from "./error.middleware";

export const commonMiddleware: RequestHandler[] = [];

export const middlewareForPublicRoutes = [...commonMiddleware];
export const middlewareForProtectedRoutes = [
  ...commonMiddleware,
  authHandlerMiddleware,
  errorHandlerMiddleware,
];

export const composedPublicMiddleware = compose(middlewareForPublicRoutes);

export const composedProtectedMiddleware = compose(
  middlewareForProtectedRoutes
);
