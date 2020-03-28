import { Response as ExpressResponse } from 'express';
import { Response } from '../../interfaces/response.interface';
import Status from '../../utils/ResponseStatus';
import RecipeModel from '../recipes/recipe.model';
import { SERVER_ERROR } from '../../utils/ServerMessages';

class FeedController {
  private status!: Status;

  public async getAllRecipes(res: ExpressResponse): Promise<Response> {
    try {
      const recipes = await RecipeModel.find().populate(
        'recipeCreatedByUserID',
        'firstName lastName'
      );
      this.status = new Status(true, 200, '', recipes);
      return this.status;
    } catch (err) {
      console.log(err);
      this.status = new Status(false, 500, SERVER_ERROR(err));
      res.send(500).json({ error: SERVER_ERROR(err) });
      return this.status;
    }
  }
}

export default new FeedController();
