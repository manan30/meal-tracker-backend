import { Document } from 'mongoose';

export interface Recipe extends Document {
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  recipeLikes: number;
  recipeComments: number;
  recipeCreatedByUserID: string;
}
