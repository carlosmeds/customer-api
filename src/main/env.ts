import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export default {
  redisHost: process.env.REDIS_HOST || 'localhost',
  redisPort: process.env.REDIS_PORT || 6379,
};
