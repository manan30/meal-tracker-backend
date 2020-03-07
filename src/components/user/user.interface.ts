import { Document } from 'mongoose';

export interface Recipe {
  id: number;
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  timeToCook: number;
  ingredients: number;
}

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recipes?: Recipe[];
  followers?: number;
  following?: number;
  saved?: number;
  likes?: number;
}
