import path from 'path';
import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config();

interface IknexConfig {
  [key: string]: Knex.Config;
}

const config: IknexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.join(__dirname, '../../../data/migrations')
    }
  },
  test: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.join(__dirname, '../../../data/migrations')
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.join(__dirname, '../../../data/migrations')
    }
  }
};

export default config;
