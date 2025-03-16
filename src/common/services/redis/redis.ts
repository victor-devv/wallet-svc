import { createClient, RedisClientType } from 'redis';
import env from '@app/common/config/env/env';
import logger from '@app/common/services/logger';
import BloomFilter from 'bloomfilter-redis';

interface BloomFilterOperations {
  init(): Promise<any>;
  add(element: string | number): Promise<any>;
  contains(element: string | number): Promise<boolean>;
}

export class RedisService {
  redis: RedisClientType;
  bloomFilters: { [key: string]: BloomFilterOperations };

  constructor() {
    const productionEnvironment = ['production'].includes(env.app_env);

    this.redis = createClient({
      url: env.redis_url,
      ...(productionEnvironment && {
        password: env.redis_password as string
      })
    });

    this.bloomFilters = { accountNumbers: null };

    this.redis.on('connect', () => {
      logger.message('🐳 Redis Connected!');
    });

    this.redis.on('error', (err) => {
      logger.error(err, 'An error occurred with the Redis client.');
    });
  }

  /**
   * Initializes the Redis client and bloom filters
   */
  async init() {
    try {
      await this.redis.connect();
      await this.initBloomFilters();
    } catch (error) {
      logger.error(error, 'Failed to initialize Redis.');
    }
  }

  /**
   * Initializes bloom filters
   */
  private async initBloomFilters() {
    const options = {
      accountNumbers: {
        redisSize: 256,
        hashesNum: 16,
        redisKey: 'account_numbers',
        redisClient: this.redis
      }
    };

    this.bloomFilters.accountNumbers = new BloomFilter(options.accountNumbers);
    await this.bloomFilters.accountNumbers.init();
  }

  // Redis commands as async functions
  async del(key: string): Promise<number> {
    return this.redis.del(key);
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    return this.redis.expire(key, seconds);
  }

  async expireat(key: string, timestamp: number): Promise<boolean> {
    return this.redis.expireAt(key, timestamp);
  }

  async incrby(key: string, increment: number): Promise<number> {
    return this.redis.incrBy(key, increment);
  }

  async hdel(hash: string, field: string): Promise<number> {
    return this.redis.hDel(hash, field);
  }

  async hget(hash: string, field: string): Promise<string | null> {
    return this.redis.hGet(hash, field);
  }

  async hgetall(key: string): Promise<Record<string, string>> {
    return this.redis.hGetAll(key);
  }

  async hset(hash: string, field: string, value: any): Promise<number> {
    return this.redis.hSet(hash, field, value);
  }

  async keys(pattern: string): Promise<string[]> {
    return this.redis.keys(pattern);
  }

  async set(
    key: string,
    value: any,
    mode?: string,
    duration?: number
  ): Promise<string> {
    if (mode && duration) {
      return this.redis.set(key, value, { [mode]: duration });
    }
    return this.redis.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async quit(): Promise<void> {
    this.redis.quit();
  }
}

const redis = new RedisService();
export default redis;
