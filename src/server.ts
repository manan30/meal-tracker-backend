import cors from 'cors';
import helmet from 'helmet';
import App from './app';
import FeedRouter from './components/feed/feed.routes';
import RecipeRouter from './components/recipes/recipe.routes';
import UserRouter from './components/user/user.routes';
import ErrorHandler from './middleware/error.middleware';
import LoggingHandler from './middleware/logging.middleware';
import NotFoundHandler from './middleware/notFound.middleware';
import config from './utils/Config';
import { SERVER_PORT } from './utils/Constants';
import DBConnection from './utils/DBConnection';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
config;
DBConnection();

const app = new App({
  port: SERVER_PORT,
  middleWares: [
    cors(),
    helmet(),
    ErrorHandler,
    NotFoundHandler,
    LoggingHandler
  ],
  routes: [
    { tag: '/user', router: UserRouter },
    { tag: '/recipe', router: RecipeRouter },
    { tag: '/feed', router: FeedRouter }
  ]
});

app.listen();
