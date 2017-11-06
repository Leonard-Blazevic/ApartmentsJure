import * as express from 'express';
import publicRouter from './routes/publicRouter';
import database from './database/database';

export class App {
    public app: any;

    constructor() {
        this.app = express();
        this.mountRoutes();
        this.initDB();
    }

    private mountRoutes(): void {
        this.app.use(publicRouter.router);
    }

    private initDB(): void {
        database.connectToDb();
    }
}

export default new App().app;
