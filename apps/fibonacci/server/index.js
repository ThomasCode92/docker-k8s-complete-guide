import cors from 'cors';
import express from 'express';
import pg from 'pg';
import redis from 'redis';

import keys from './config/keys.js';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// Express App Setup
const app = express();
app.use(cors());
app.use(express.json());

// Postgres Client Setup
const pgClient = new pg.Pool({
  user: keys.pgUser,
  password: keys.pgPassword,
  host: keys.pgHost,
  database: keys.pgDatabase,
  port: keys.pgPort,
  ssl: IS_PRODUCTION ? { rejectUnauthorized: false } : false,
});

pgClient.on('connect', client => {
  client
    .query('CREATE TABLE IF NOT EXISTS values (number INT)')
    .catch(err => console.error(err));
});

// Redis Client Setup
const redisClient = redis.createClient({
  url: `redis://${keys.redisHost}:${keys.redisPort}`,
});

const redisPublisher = redisClient.duplicate();

// Express route handlers
app.get('/', function (_req, res) {
  return res.json({ message: 'server is running' });
});

app.get('/values/all', async function (_req, res) {
  const values = await pgClient.query('SELECT * from values');
  return res.json({ values: values.rows });
});

app.get('/values/current', async function (_req, res) {
  const values = await redisClient.hGetAll('values');
  return res.json(values);
});

app.post('/values', async function (req, res) {
  const { index } = req.body;

  if (parseInt(index) > 40) {
    return res.status(422).json({ error: 'Index too high' });
  }

  redisClient.hSet('values', index, 'Nothing yet!');
  redisPublisher.publish('insert', index);

  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  return res.status(201).json({ message: 'Index inserted successfully' });
});

app.listen(5000, function () {
  console.log('Server listening on port 5000...');
});
