import cors from 'cors';
import App from './app';
import DBConnection from './DBConnection';
import UserRouter from './routes/User';
import { SERVER_PORT } from './utils/Constants';

const app = new App({
  port: SERVER_PORT,
  middleWares: [cors()],
  routes: [{ tag: 'user', router: UserRouter }]
});

DBConnection();

app.listen();
