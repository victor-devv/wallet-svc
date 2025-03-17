import express, { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import responseTime from 'response-time';
import requestID from 'express-request-id';
import helmet from 'helmet';
import cors from 'cors';
import container from '@app/common/config/ioc/ioc';
import env from '@app/common/config/env/env';
import logger from '@app/common/services/logger';
import redis from '@app/common/services/redis';
import jsend from './middlewares/jsend';
import requestLogger from './middlewares/requestLogger';
import { responseLogger } from './middlewares/responseLogger';
import { MetricsService } from '@app/server/services';
import { ChannelRepo } from '@app/data/channel';

export class App {
  private server: InversifyExpressServer;

  constructor() {
    this.server = new InversifyExpressServer(container, null, {
      rootPath: `${env.api_version}`
    });

    // setup server-level middlewares
    this.registerMiddlewares();
    this.registerHandlers();

    this.createAccountChannels();
  }

  /**
   * Registers middlewares on the application server
   */
  private registerMiddlewares() {
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
  }

  /**
   * Registers uhandlers after all middlewares and controller routes have been mounted
   */
  private registerHandlers() {
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

  async createAccountChannels() {
    try {
      const chan = [
        {
          name: 'demo_credit',
          min: 650_000_000,
          max: 659_999_999
        }
      ];

      //@ts-ignore
      const _channels = await ChannelRepo.create(chan) as Channel[];
      const channels = _channels.map((it) => {
        return {
          name: it.name,
          min: it.min,
          max: it.max
        };
      });

      redis.set('ACCOUNT_CHANNELS_BLOCKS', JSON.stringify(channels));
      logger.message('😎  default account channel(s) created');
    } catch (error) {}
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
