import { Router } from 'express';
import books from '../data/books.js';

const bookRoutes = Router();

// Get all books
bookRoutes.get('/', (req, res) => {
    res.json(books);
});

// Get one book
bookRoutes.get('/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(b => b.isbn === isbn);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    res.json(book);
});

// Create a new book
bookRoutes.post('/', (req, res) =>{
    // get data from request body
    const newBook = req.body;
    const existingBook = books.find(b => b.isbn === newBook.isbn);

    if (!newBook.isbn || !newBook.title || !newBook.author){
        return res.status(404).json({ error: 'ISBN, Title and Author are required' });
    } 

    if (existingBook){
        return res.status(404).json({ error: 'Book with this ISBN already exist'})
    }

    books.push(newBook);
    res.json(books);
}
);

export default bookRoutes;