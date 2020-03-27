import { Document } from 'mongoose';
import { Recipe } from '../recipes/recipe.interface';

export type tokens = {
  accessToken: string;
};

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recipes: Recipe[];
  followers: number;
  following: number;
  saved: number;
  likes: number;
  tokens: tokens;
  generateAuthToken: Function;
}
