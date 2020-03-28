import { Request, Response, Router } from 'express';
import PaginationMiddleware from '../../middleware/pagination.middleware';
import RecipeModel from '../recipes/recipe.model';

class FeedRoutes {
  private router: Router = Router();

  public getRoutes(): Router {
    this.router.get(
      '/',
      PaginationMiddleware(RecipeModel, [
        {
          populationField: 'recipeCreatedByUserID',
          selectionField: 'firstName lastName'
        }
      ]),
      function getAllRecipes(req: Request, res: Response): void {
        const { paginatedData } = res;
        try {
          res.status(200).json({ data: paginatedData || {} });
        } catch (err) {
          res.status(500).json({ data: [err.message] });
        }
      }
    );

    return this.router;
  }
}

export default new FeedRoutes().getRoutes();
