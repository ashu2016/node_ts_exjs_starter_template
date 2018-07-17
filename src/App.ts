import * as express from 'express';
import {WelcomeRoute} from './routes';
class App {
    public express:any;

    constructor () {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes (): void {        
        this.express.use('/welcome', WelcomeRoute);
        this.express.use('/',WelcomeRoute);
      }

}

export default new App().express; 