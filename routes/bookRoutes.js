import { Router } from 'express';
import books from '../data/books.js';

const router = Router();

// Get all books
router.get('/', (req, res) => {
    res.json(books);
});

export default router;