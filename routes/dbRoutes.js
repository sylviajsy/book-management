import { Router } from 'express';
import db from '../db/index.js'

const dbRoutes = Router();

// Get all books
dbRoutes.get('/', async (req, res) => {
    try {
        const bookTable = await db.query(`SELECT * FROM books`);
        res.json(bookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Get one book
dbRoutes.get('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const bookTable = await db.query(`SELECT * FROM books WHERE isbn = $1`, [isbn]);

        if (bookTable.rows.length === 0){
            return res.status(404).json({ message: 'Book not found' });
        }
        
        res.json(bookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Create a new book
dbRoutes.post('/', async (req, res) => {
    try {
        const { isbn, title, author, format } = req.body;

        if (!title || !author){
            return res.status(404).json({ error: 'ISBN, Title and Author are required' });
        }

        const newBookTable = await db.query(`INSERT INTO books (isbn, title, author, format) 
            VALUES ($1, $2, $3, $4) RETURNING *`, [isbn, title, author, format]);

        res.json(newBookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// Update a book
dbRoutes.put('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const { title, author, format } = req.body;
        const updateBookTable = await db.query(`UPDATE books 
            SET title = COALESCE($2, title), author = COALESCE($3, author), format = COALESCE($4, format)
            WHERE isbn = $1
            RETURNING *`, [isbn, title, author, format]);
        
        if (updateBookTable.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updateBookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
})

// Delete a book
dbRoutes.delete('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const deleteBookTable = await db.query(`DELETE FROM books WHERE isbn = $1 RETURNING *`, [isbn]);

        if (deleteBookTable.rows.length === 0) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(deleteBookTable.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
})

export default dbRoutes;