import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';

export default function errorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void {
  const status = error.statusCode || 500;
  const message =
    error.message || 'Internal server error. Please try again in some time';

  console.log({ status, message });

  res.status(status).send(message);
}
