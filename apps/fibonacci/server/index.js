import cors from 'cors';
import express from 'express';
import pg from 'pg';

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
