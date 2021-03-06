import { Request, Response, Router } from 'express';
import RecipeController from './recipe.controller';
import { Recipe } from './recipe.interface';

class RecipeRouter {
  router: Router = Router();

  public getRoutes(): Router {
    this.router.get('/all', async function getAllRecipes(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const {
          code,
          message,
          status,
          specificData
        } = await RecipeController.getAllRecipes(res);

        if (status) {
          res.status(code).json({ data: specificData || {} });
        } else res.status(code).json({ data: message });
      } catch (err) {
        res.status(500).json({ data: [err.message] });
      }
    });

    this.router.post('/create', async function postRecipe(
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
        } = await RecipeController.postRecipe(body, res);

        if (status) {
          res.status(code).json({ data: specificData || {} });
        } else res.status(code).json({ data: [message] });
      } catch (err) {
        res.status(500).json({ data: [err.message] });
      }
    });

    return this.router;
  }
}

export default new RecipeRouter().getRoutes();
