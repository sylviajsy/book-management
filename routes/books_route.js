import { Router } from 'express';
import books from '../data/books';

const router = Router();

router.get('/', (req, res) => {
    res.json(books);
});

export default router;