import { NextFunction, Request, Response } from 'express';
import { NOT_AUTHORIZED, INVALID_TOKEN } from '../utils/ServerMessages';
import jwt from 'jsonwebtoken';

export function authenticationHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers['x-access-token'] || req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: NOT_AUTHORIZED });
  }
  try {
    const decoded = jwt.verify(
      token instanceof Array ? token[0] : token,
      process.env.PASSPORT_SECRET || ''
    );
    req.body = { ...req.body, decoded };
    next();
  } catch (e) {
    res.status(400).json({ message: INVALID_TOKEN });
  }
}
