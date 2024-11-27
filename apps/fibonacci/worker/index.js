import redis from 'redis';

import keys from './config/keys.js';
import fib from './utils/fib.js';

const client = redis.createClient({
  url: `redis://${keys.redisHost}:${keys.redisPort}`,
});

const clientSub = client.duplicate();

clientSub.on('message', (_channel, message) => {
  client.hSet('values', message, fib(parseInt(message)));
});

clientSub.subscribe('insert');
