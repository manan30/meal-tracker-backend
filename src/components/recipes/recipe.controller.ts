import { Response as ExpressResponse } from 'express';
import { Response } from '../../interfaces/response.interface';
import Status from '../../utils/ResponseStatus';
import { RECIPE_POSTED, SERVER_ERROR } from '../../utils/ServerMessages';
import { Recipe } from './recipe.interface';
import RecipeModel from './recipe.model';
import UserModel from '../user/user.model';

class RecipeController {
  status!: Status;

  public async getAllRecipes(res: ExpressResponse): Promise<Response> {
    try {
      const recipes = await RecipeModel.find().populate(
        '_recipeCreatedByUserID'
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

  public async postRecipe(
    body: Recipe,
    res: ExpressResponse
  ): Promise<Response> {
    try {
      const { recipeCreatedByUserID } = body;
      const newRecipe = new RecipeModel({
        ...body,
        _recipeCreatedByUserID: recipeCreatedByUserID
      });
      await newRecipe.save();
      await UserModel.findByIdAndUpdate(recipeCreatedByUserID, {
        $push: { recipes: newRecipe }
      });
      this.status = new Status(true, 200, RECIPE_POSTED, newRecipe);
      return this.status;
    } catch (err) {
      console.log(err);
      this.status = new Status(false, 500, SERVER_ERROR(err));
      res.send(500).json({ error: SERVER_ERROR(err) });
      return this.status;
    }
  }
}

export default new RecipeController();
