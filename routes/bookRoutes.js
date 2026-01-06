import { Router } from 'express';
import books from '../data/books.js';

const bookRoutes = Router();

// Get all books
bookRoutes.get('/', (req, res) => {
    res.json(books);
});

// Get one book
bookRoutes.get('/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(b => b.isbn === isbn);

    if (!book) {
        res.status(404).json({ error: 'Book not found' });
    }
    
    res.json(book);
});

export default bookRoutes;