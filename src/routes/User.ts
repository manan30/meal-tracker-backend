import { Router, Request, Response } from 'express';
import UserController from '../controllers/User';

class UserRoutes {
  public getRoutes(): Router {
    const router = Router();

    router.get('/', async function getRUser(req: Request, res: Response) {
      const data = await UserController.fetchUser();
      console.log(data);
    });

    router.post('/create', async function createRUser(
      req: Request,
      res: Response
    ) {
      const status = await UserController.createUser({ ...req.body });
      console.log(status);
      // if (status.toString === "") {
      //   res.send({ code: 500, data: 'Duplicate email address' });
      // } else {
      //   res.send({ code: 201, data: 'User created successfully' });
      // }
    });

    return router;
  }
}

export default new UserRoutes().getRoutes();
