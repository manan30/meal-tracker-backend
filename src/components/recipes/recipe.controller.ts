import { Response } from '../../interfaces/response.interface';
import Status from '../../utils/ResponseStatus';
import { RECIPE_POSTED, SERVER_ERROR } from '../../utils/ServerMessages';
import { Recipe } from './recipe.interface';
import RecipeModel from './recipe.model';

class RecipeController {
  status!: Status;

  public async postRecipe(body: Recipe): Promise<Response> {
    try {
      const { recipeCreatedByUserID } = body;
      const newRecipe = new RecipeModel(body);
      await newRecipe.save();
      // const user = await UserModel.findById(_recipeCreatedByUserID);
      // user?.recipes.push(savedRecipe);
      // await user?.save();

      this.status = new Status(true, 200, RECIPE_POSTED, {});
      return this.status;
    } catch (err) {
      console.log(err);
      this.status = new Status(false, 500, SERVER_ERROR(err));
      return this.status;
    }
  }
}

export default new RecipeController();
