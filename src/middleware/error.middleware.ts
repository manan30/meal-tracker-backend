import HttpException from '../utils/HttpException';
import { Request, Response, NextFunction, response } from 'express';

export function errorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = error.statusCode || 500;
  const message =
    error.message || 'Internal server error. Please try again in some time';

  response.status(status).send(message);
}
