import knex, { Knex } from 'knex';
import env from '@app/common/config/env';
import logger from '@app/common/services/logger/logger';

/**
 * Database class. Handles database connections.
 */
export class DB {
  connection: Knex;

  /**
   * Connects to a MySQL server using Knex
   */
  async connect() {
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
        directory: "@app/data/migrations",
      }
    });

    logger.message('📦  MySQL Connected!');
  }

  /**
   * Runs migrations to sync the database schema
   */
  async init() {
    await this.connect();

    await this.connection.migrate.latest()
      .then(() => logger.message('📦  Migrations Applied!'))
      .catch(err => logger.error(err, 'Migration Error:'));
  }

  /**
   * Closes the database connection.
   */
  async disconnect() {
    await this.connection.destroy();
  }
}

export default new DB();
