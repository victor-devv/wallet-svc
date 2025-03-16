// import metadata for es7 decorators support
import 'reflect-metadata';
// allow creation of aliases for directories
import 'module-alias/register';
import http from 'http';
import env from '../common/config/env/env';
import logger from '@app/common/services/logger/logger';
import redis from '@app/common/services/redis';
import { App } from './app';
import db from './db';

const start = async () => {
  try {
    const app = new App();
    const appServer = app.getServer().build();
    const httpServer = http.createServer(appServer);

    await db.init();
    await redis.init();

    httpServer.listen(env.port);
    httpServer.on('listening', () =>
      logger.message(
        `🚀  ${env.service_name} running in ${env.app_env}, listening on ` +
          env.port
      )
    );
  } catch (err) {
    logger.error(err, 'fatal server error');
  }
};

start();

process.once('SIGINT', () => {
  redis.quit();
  db.disconnect();
});
