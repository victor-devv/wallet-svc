import dotenv from 'dotenv';
import { isEmpty } from 'lodash';

dotenv.config();

const validEnvs = ['dev', 'production', 'test'] as const;
type AppEnv = typeof validEnvs[number];

const getEnv = (): AppEnv => validEnvs.find((_) => _ === process.env.NODE_ENV) ?? 'dev';

const optionalEnvVars = {
  api_version: process.env.API_VERSION || '/api/v1',
  app_env: getEnv(),
  service_name: process.env.SERVICE_NAME || 'demo-credit-wallet',
} as const;

const requiredEnvVars = {
  port: Number(process.env.PORT),
  gateman_key: process.env.GATEMAN_KEY,
  redis_url: process.env.REDIS_URL,
  default_otp: process.env.DEFAULT_OTP,
  otp_allow_list: process.env.OTP_ALLOW_LIST,
  salt_rounds: Number(process.env.SALT_ROUNDS) || 10,
} as const;

const prodVars = {
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  redis_password: process.env.REDIS_PASSWORD,
} as const;

const env = {
  ...optionalEnvVars,
  ...requiredEnvVars,
  ...prodVars,
} as const;

const getKeys = (obj: {}, _: { ifEnvIs: AppEnv[] }) =>
  _.ifEnvIs.includes(env.app_env) ? Object.keys(obj) : [];

const requiredVariables = Object.keys(requiredEnvVars)
  .concat(getKeys(prodVars, { ifEnvIs: ['production'] }));

const missingVariables = requiredVariables
  .filter((key) => !env[key])
  .map((_) => _.toUpperCase());

if (!isEmpty(missingVariables)) {
  throw new Error(
    `The following required variables are missing: ${missingVariables}}`
  );
}

export default env;
