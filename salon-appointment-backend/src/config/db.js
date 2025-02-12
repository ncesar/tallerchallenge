const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres-challenge',
  host: 'localhost',
  database: 'salon',
  password: '123',
  port: 5433,
});
// TODO: could be in a .env
module.exports = { pool };
