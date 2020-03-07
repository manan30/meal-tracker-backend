import mongoose, { Schema } from 'mongoose';
import { User, Recipe } from './user.interface';

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    recipes: Array,
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    saved: { type: Number, default: 0 },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model<User>('User', UserSchema);
