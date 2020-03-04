import App from './app';
import cors from 'cors';

const port = 2130;

const app = new App({ port, middleWares: [cors()], controllers: [] });

app.listen();
