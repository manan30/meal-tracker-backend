import mongoose, { Schema } from 'mongoose';
import { User } from './user.interface';

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

export default mongoose.model<User>('User', UserSchema);
