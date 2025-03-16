import express, { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import responseTime from 'response-time';
import requestID from 'express-request-id';
import helmet from 'helmet';
import cors from 'cors';
import container from '@app/common/config/ioc/ioc';
import env from '@app/common/config/env/env';
import jsend from './middlewares/jsend';
import requestLogger from './middlewares/requestLogger';
import { responseLogger } from './middlewares/responseLogger';
import { MetricsService } from '@app/server/services';

export class App {
  private server: InversifyExpressServer;
  constructor() {
    //public container = defaultContainer
    this.server = new InversifyExpressServer(container, null, {
      rootPath: `${env.api_version}`
    });

    // setup server-level middlewares
    this.server.setConfig((app: Application) => {
      app.disable('x-powered-by');
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(responseTime());
      app.use(requestID());
      app.use(requestLogger);
      app.use(responseLogger);
      app.use(jsend);
      app.use(helmet());
      app.use(cors());
    });

    /**
     * Register handlers after all middlewares and controller routes have been mounted
     */
    this.server.setErrorConfig((app: Application) => {
      // expose index endpoint
      app.get('/', (req, res) => {
        res.status(200).json({
          status: 'success',
          message: 'Server running',
          data: null
        });
      });

      app.get('/metrics', MetricsService.send);

      // register 404 route handler
      app.use((req, res, next) => {
        res.status(404).json({
          status: 'error',
          message: "Whoops! Route doesn't exist."
        });
      });
    });
  }

  /**
   * Returns the configured Inversify express server
   */
  getServer = () => this.server;

  /**
   * Applies all routes and configuration to the server, returning the express application server.
   */
  build() {
    const app = this.server.build();
    return app;
  }
}
