import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';

export function Logger(req: Request, res: Response, next: NextFunction): void {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() +
    1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  const { method, url } = req;
  const log = `${chalk.yellowBright(`[${formattedDate}]`)} ${chalk.blueBright(
    `${method}:${url}`
  )}`;
  console.log(log);
  next();
}
