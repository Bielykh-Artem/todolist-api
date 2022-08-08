import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = async (
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
