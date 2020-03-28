import { Request, Response, Router } from 'express';
import FeedController from './feed.controller';

class FeedRoutes {
  private router: Router = Router();

  public getRoutes(): Router {
    this.router.get('/', async function getAllRecipes(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const {
          code,
          message,
          status,
          specificData
        } = await FeedController.getAllRecipes(res);

        if (status) {
          res.status(code).json({ data: specificData || {} });
        } else res.status(code).json({ data: message });
      } catch (err) {
        res.status(500).json({ data: [err.message] });
      }
    });

    return this.router;
  }
}

export default new FeedRoutes().getRoutes();
