import Redis from 'ioredis';

export class Cache {
  redis: Redis;
  constructor() {
    this.redis = new Redis({
      host: 'localhost',
      port: 6380,
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
