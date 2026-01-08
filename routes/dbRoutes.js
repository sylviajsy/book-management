import { Router } from 'express';
import db from '../db/index.js'

const dbRoutes = Router();

// Get all books data
dbRoutes.get('/', async (req, res) => {
    try {
        const bookTable = await db.query('SELECT * FROM books');
        res.json(bookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

export default dbRoutes;