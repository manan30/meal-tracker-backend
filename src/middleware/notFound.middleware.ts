import HttpException from '../utils/HttpException';
import { Request, Response, NextFunction, response } from 'express';

export function notFoundHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const message = 'Resource not found';

  response.status(404).send(message);
}
