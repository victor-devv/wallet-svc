import path from 'path';
import knex, { Knex } from 'knex';
import env from '@app/common/config/env/env';
import logger from '@app/common/services/logger/logger';
import { applyUlidReplacementHook } from '@app/data/base/utils/query.utils';

/**
 * Database class. Handles database connections.
 */
export class DB {
  private static instance: DB;
  private connection: Knex;

  private constructor() {
    this.connection = knex({
      client: 'mysql2',
      connection: {
        host: env.db_host,
        port: Number(env.db_port),
        user: env.db_username,
        password: env.db_password,
        database: env.db_name
      },
      pool: { min: 2, max: 10 },
      migrations: {
        directory: path.join(__dirname, '../../src/data/migrations') //this because yarn:start will run in dist and not src
      }
    });

    applyUlidReplacementHook(this.connection);
    logger.message('📦  MySQL Connected!');
  }

  /**
   * Returns the singleton instance of the database connection
   */
  static getInstance(): DB {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  /**
   * Returns the existing database connection
   */
  getConnection(): Knex {
    return this.connection;
  }

  /**
   * Runs migrations to sync the database schema
   */
  async init() {
    if (env.app_env == 'test')
      await this.connection.migrate
        .latest()
        .then(() => logger.message('📦  Migrations Applied!'))
        .catch((err) => logger.error(err, 'Migration Error:'));
  }

  /**
   * Closes the database connection.
   */
  async disconnect() {
    await this.connection.destroy();
    DB.instance = null; // Reset the singleton instance
  }
}

export default DB.getInstance();
