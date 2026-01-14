import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Pool management
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DBNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

export default {
    query: (text, params) => pool.query(text, params),
};