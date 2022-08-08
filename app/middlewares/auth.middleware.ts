import { NextFunction, Request, Response } from "express";

export const authHandlerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO
    next();
  } catch (err) {
    next(err);
  }
};
