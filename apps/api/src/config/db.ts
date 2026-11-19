// @ts-ignore pg has no declarations installed in this project
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pkg;


console.log('Database configuration:', {
  user: process.env.DB_USER,
  host: process.env.DB_HOST
})

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '5432'),
  password: process.env.DB_PASSWORD
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
}); 

export default pool;