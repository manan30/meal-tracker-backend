import { Response as ExpressResponse } from 'express';
import { PaginationObject } from '../../interfaces/common.interface';
import { Response } from '../../interfaces/response.interface';
import Status from '../../utils/ResponseStatus';
import { SERVER_ERROR } from '../../utils/ServerMessages';
import { Recipe } from '../recipes/recipe.interface';
import RecipeModel from '../recipes/recipe.model';

class FeedController {
  private status!: Status;

  // public async getAllRecipes(
  //   res: ExpressResponse,
  //   page: number,
  //   limit: number
  // ): Promise<Response> {
  //   try {
  //     this.status = new Status(true, 200, '', paginatedData);
  //     return this.status;
  //   } catch (err) {
  //     console.log(err);
  //     this.status = new Status(false, 500, SERVER_ERROR(err));
  //     res.send(500).json({ error: SERVER_ERROR(err) });
  //     return this.status;
  //   }
  // }
}

export default new FeedController();
