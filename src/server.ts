import cors from 'cors';
import helmet from 'helmet';
import App from './app';
import UserRouter from './components/user/user.routes';
import RecipeRouter from './components/recipes/recipe.routes';
import { errorHandler } from './middleware/error.middleware';
import { logHandler } from './middleware/logging.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import config from './utils/Config';
import { SERVER_PORT } from './utils/Constants';
import DBConnection from './utils/DBConnection';

config;
DBConnection();

const app = new App({
  port: SERVER_PORT,
  middleWares: [cors(), helmet(), errorHandler, notFoundHandler, logHandler],
  routes: [
    { tag: '/user', router: UserRouter },
    { tag: '/recipe', router: RecipeRouter }
  ]
});

app.listen();
