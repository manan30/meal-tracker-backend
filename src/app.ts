import express, { Application } from 'express';

class App {
  private app: Application;
  private port: number;

  constructor(init: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = init.port;
    this.middleWares(init.middleWares);

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

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

export default App;
