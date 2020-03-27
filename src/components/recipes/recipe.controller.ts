import { Recipe } from './recipe.interface';
import { Response } from '../../interfaces/response.interface';
import Status from '../../utils/ResponseStatus';
import { SERVER_ERROR, RECIPE_POSTED } from '../../utils/ServerMessages';
import RecipeModel from './recipe.model';
import UserModel from '../user/user.model';

class RecipeController {
  public async postRecipe(body: Recipe): Promise<Response> {
    try {
      const { recipeCreatedByUserID } = body;
      const newRecipe = new RecipeModel(body);
      const savedRecipe = await newRecipe.save();
      // const user = await UserModel.findById(_recipeCreatedByUserID);
      // user?.recipes.push(savedRecipe);
      // await user?.save();

      return new Status(true, 200, RECIPE_POSTED, {});
    } catch (err) {
      console.log(err);
      return new Status(false, 500, SERVER_ERROR(err));
    }
  }
}

export default new RecipeController();
