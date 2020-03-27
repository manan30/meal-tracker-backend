import { Router, Request, Response } from 'express';

class FeedRoutes {
  public getRoutes(): Router {
    const router = Router();

    router.get('/recipes', async function getFeedRecipes(
      req: Request,
      res: Response
    ) {
      try {
      } catch (e) {}
    });

    return router;
  }
}

export default new FeedRoutes().getRoutes();
