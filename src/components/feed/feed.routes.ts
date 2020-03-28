import { Request, Response, Router } from 'express';
import PaginationMiddleware from '../../middleware/pagination.middleware';
import RecipeModel from '../recipes/recipe.model';
import { PaginationObject } from '../../interfaces/common.interface';

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

        const data = {
          hasMore: paginatedData?.hasMore,
          next: paginatedData?.next,
          prev: paginatedData?.prev,
          totalRecords: paginatedData?.totalRecords,
          results: paginatedData?.results.map(value => {
            const object = JSON.parse(JSON.stringify(value));
            const user = object.recipeCreatedByUserID;
            delete object.recipeCreatedByUserID;
            return { recipe: object, user };
          })
        };
        try {
          res.status(200).json({ data: data || {} });
        } catch (err) {
          res.status(500).json({ data: [err.message] });
        }
      }
    );

    return this.router;
  }
}

export default new FeedRoutes().getRoutes();
