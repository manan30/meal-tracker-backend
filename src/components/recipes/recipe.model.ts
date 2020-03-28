import mongoose, { Schema } from 'mongoose';
import { Recipe } from './recipe.interface';

const recipeSchema = new Schema<Recipe>(
  {
    recipeName: { type: String, required: true },
    recipeImage: String,
    recipeDescription: { type: String, required: true },
    recipeLikes: { type: Number, default: 0 },
    recipeComments: { type: Number, default: 0 },
    recipeCreatedByUserID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

export default mongoose.model<Recipe>('Recipe', recipeSchema);
