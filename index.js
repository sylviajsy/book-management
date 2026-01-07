import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

// Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
// Using bodyParser
app.use(express.urlencoded({ extended: true }));

// Mount the book routes
// Any request starting with '/books' will be handled by bookRoutes
app.use('/books', bookRoutes);

// Pool manages postgreSQL clients
const { Pool } = require('pg');
const pool = new Pool({
    user: 'nelson',
    host: 'localhost',
    database: 'bookManagement',
    password: '',
    port: 5432,
})

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});