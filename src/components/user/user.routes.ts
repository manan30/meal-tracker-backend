import { Router, Request, Response } from 'express';
import UserController from './user.controller';
import { User } from './user.interface';

class UserRoutes {
  public getRoutes(): Router {
    const router = Router();

    router.post('/create', async function createRUser(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const body: User = req.body;
        const {
          status,
          message,
          specificData
        } = await UserController.createUser(body);

        if (status) {
          const { createdUser, token } = specificData;
          delete createdUser.tokens.accessToken;
          res
            .status(200)
            .header('x-auth-token', token)
            .json({ data: { createdUser, accessToken: token } || {} });
        } else res.status(400).json({ data: message });
      } catch (e) {
        res.status(400).json({ data: e.message });
      }
    });

    return router;
  }
}

export default new UserRoutes().getRoutes();
