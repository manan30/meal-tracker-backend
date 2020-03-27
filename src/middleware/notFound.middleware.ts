import { Request, Response } from 'express';
import HttpException from '../utils/HttpException';

export default function notFoundHandler(
  error: HttpException,
  req: Request,
  res: Response
): void {
  const message = 'Resource not found';

  res.status(404).send(message);
}
