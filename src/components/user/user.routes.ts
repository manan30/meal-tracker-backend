import { Request, Response, Router } from 'express';
import UserController from './user.controller';

class UserRoutes {
  router: Router = Router();

  public getRoutes(): Router {
    this.router.post('/create', async function createUser(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const { body } = req;
        const {
          status,
          code,
          message,
          specificData
        } = await UserController.createUser(body);

        if (status) {
          const { user, token } = specificData;
          delete user.tokens.accessToken;
          res
            .status(code)
            .header('x-auth-token', token)
            .json({ data: { user, accessToken: token } || {} });
        } else res.status(code).json({ data: [message] });
      } catch (e) {
        res.status(500).json({ data: e.message });
      }
    });

    this.router.post('/login', async function loginUser(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const { body } = req;

        const {
          status,
          code,
          message,
          specificData
        } = await UserController.loginUser(body);

        if (status) {
          const { user, token } = specificData;
          delete user.tokens.accessToken;
          delete user.password;
          res
            .status(code)
            .header('x-auth-token', token)
            .json({ data: { user, accessToken: token } || {} });
        } else res.status(code).json({ data: message });
      } catch (e) {
        res.status(500).json({ data: e.message });
      }
    });

    return this.router;
  }
}

export default new UserRoutes().getRoutes();
