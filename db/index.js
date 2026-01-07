import pg from 'pg';

// Pool management
const { Pool } = pg;

const pool = new Pool({
    user: 'nelson',
    host: 'localhost',
    database: 'bookManagement',
    password: '',
    port: 5432,
})

export default {
    query: (text, params) => pool.query(text, params),
};