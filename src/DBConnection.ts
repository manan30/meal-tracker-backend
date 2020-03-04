import mongoose from 'mongoose';
import { DATABASE, DB_PORT, DB_URL } from './utils/Constants';

export default async function connection(): Promise<any> {
  try {
    await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DATABASE}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
      connectTimeoutMS: 10000
    });
    console.log('Database connection successful.');
  } catch (e) {
    console.log('Database connection failed.', e);
  }
}
