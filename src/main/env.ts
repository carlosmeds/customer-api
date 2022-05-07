import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export default {
  redisHost: process.env.REDIS_HOST || 'localhost',
  redisPort: process.env.REDIS_PORT || 6379,
  ssoClientId: process.env.SSO_CLIENT_ID || '',
  ssoClientSecret: process.env.SSO_CLIENT_SECRET || '',
  ssoUrl: process.env.SSO_URL || '',
};
