import express, { Application } from 'express';
import { RouteType } from './interfaces/common.interface';

class App {
  private app: Application;

  private port: number;

  constructor(init: { port: number; middleWares: any; routes: RouteType[] }) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.port = init.port;

    this.middleWares(init.middleWares);
    this.routes(init.routes);
  }

  private middleWares(middleWares: {
    forEach: (arg0: (middleware: any) => void) => void;
  }): void {
    middleWares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private routes(routes: RouteType[]): void {
    routes.forEach(route => {
      this.app.use(route.tag, route.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

export default App;
