import express, { Application, Router } from 'express';

export type RouteType = {
  tag: string;
  router: Router;
};

class App {
  private app: Application;
  private port: number;

  constructor(init: { port: number; middleWares: any; routes: RouteType[] }) {
    this.app = express();
    this.port = init.port;
    this.middleWares(init.middleWares);
    this.routes(init.routes);

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private middleWares(middleWares: {
    forEach: (arg0: (middleware: any) => void) => void;
  }) {
    middleWares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private routes(routes: RouteType[]): void {
    routes.forEach(route => {
      this.app.use(route.tag, route.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

export default App;
