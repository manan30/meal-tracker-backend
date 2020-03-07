import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import App from './app';
import UserRouter from './components/user/user.routes';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import { SERVER_PORT } from './utils/Constants';
import DBConnection from './utils/DBConnection';

dotenv.config();

DBConnection();

const app = new App({
  port: SERVER_PORT,
  middleWares: [cors(), helmet(), errorHandler, notFoundHandler],
  routes: [{ tag: '/user', router: UserRouter }]
});

app.listen();
