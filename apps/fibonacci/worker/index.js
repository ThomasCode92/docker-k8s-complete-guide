import redis from 'redis';

import keys from './config/keys.js';
import fib from './utils/fib.js';

const client = redis.createClient({
  url: `redis://${keys.redisHost}:${keys.redisPort}`,
});

const clientSub = client.duplicate();

await client.connect();
await clientSub.connect();

clientSub.subscribe('insert', message => {
  console.log('Insert event received:', message || 'no message');
  client.hSet('values', message, fib(parseInt(message)));
});
