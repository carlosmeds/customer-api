import Redis from 'ioredis';
import env from '../../../main/env';

export class Cache {
  redis: Redis;
  constructor() {
    this.redis = new Redis({
      host: env.redisHost,
      port: Number(env.redisPort),
      keyPrefix: 'customer:',
    });
  }

  async get(key) {
    const value = await this.redis.get(key);

    return value ? JSON.parse(value) : null;
  }

  set(key, value, timeExp) {
    return this.redis.set(key, JSON.stringify(value), 'EX', timeExp);
  }
}
