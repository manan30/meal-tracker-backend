import { Router, Request, Response } from 'express';
import RecipeController from './recipe.controller';
import { Recipe } from './recipe.interface';

class RecipeRouter {
  public getRoutes() {
    const router = Router();

    router.post('/create', async function postRecipe(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const { body }: { body: Recipe } = req;
        const {
          code,
          message,
          status,
          specificData
        } = await RecipeController.postRecipe(body);

        if (status) {
          res.status(code).json({ data: specificData || {} });
        } else res.status(code).json({ data: [message] });
      } catch (err) {
        res.status(500).json({ data: [err.message] });
      }
    });

    return router;
  }
}

export default new RecipeRouter().getRoutes();
