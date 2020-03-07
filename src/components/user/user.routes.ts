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
        const { status, message } = await UserController.createUser(body);

        if (status) res.status(200).json({ message });
        else res.status(400).json({ message });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
    });

    return router;
  }
}

export default new UserRoutes().getRoutes();
