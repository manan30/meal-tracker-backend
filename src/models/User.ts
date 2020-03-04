import mongoose, { Schema, Document } from 'mongoose';

export interface Recipe {
  id: number;
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  timeToCook: number;
  ingredients: number;
}

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  recipes: Recipe[];
  followers: number;
  following: number;
  saved: number;
  likes: number;
};

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    recipes: Array,
    followers: Number,
    following: Number,
    saved: Number,
    likes: Number
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>('User', UserSchema);
