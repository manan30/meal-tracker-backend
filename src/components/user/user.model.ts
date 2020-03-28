import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';
import { User } from './user.interface';

const UserSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    recipesCount: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }],
    likes: { type: Number, default: 0 },
    tokens: { type: Object, default: {} },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function generateAuthToken(): string {
  const token = jwt.sign(
    { id: this._id, name: this.firstName },
    process.env.PASSPORT_SECRET || 'testing_token',
    { expiresIn: '7 days' }
  );
  return token;
};

export default mongoose.model<User>('User', UserSchema);
