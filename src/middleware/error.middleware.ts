import { Request, Response } from 'express';
import HttpException from '../utils/HttpException';

export default function errorHandler(
  error: HttpException,
  req: Request,
  res: Response
): void {
  const status = error.statusCode || 500;
  const message =
    error.message || 'Internal server error. Please try again in some time';

  res.status(status).send(message);
}
