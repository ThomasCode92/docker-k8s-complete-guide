import express from 'express';
import redis from 'redis';

const app = express();
const client = redis.createClient({
  url: 'redis://redis-server:6379',
});

await client.connect();
await client.set('visits', 0);

app.get('/', async function (req, res) {
  const visits = await client.get('visits');
  await client.set('visits', parseInt(visits) + 1);

  return res.send('Number of visits: ' + visits);
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});
