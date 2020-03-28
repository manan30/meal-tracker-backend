import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException';

export default function notFoundHandler(
  error: HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void {
  const message = 'Resource not found';

  res.status(404).send(message);
}
