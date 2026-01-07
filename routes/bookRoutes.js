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
// {
//     "isbn": "06631324511",
//     "title": "My First POST Book",
//     "author": "Techtonica Student",
//     "format": "Hardcover"
// }
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
    res.json({ message: 'Book added successfully', book: newBook });
}
);

// Update a book
bookRoutes.put('/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const updates = req.body;

    const index = books.findIndex(b => b.isbn === isbn);

    if (index === -1){
        return res.status(404).json({ error: 'Book not found'})
    }

    // Keep old data, update new data
    // { "author": "Siyi Ji" }
    books[index] = { ...books[index], ...updates };
    res.json({ message: 'Book updated successfully', book: books[index] });
})

// Delete a book
bookRoutes.delete('/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const index = books.findIndex(b => b.isbn === isbn);

    if (index === -1){
        return res.status(404).json({ error: 'Book not found'})
    }

    // Remove one element at the specific index
    books.splice(index, 1);
    res.json({ message: 'Book deleted successfully', book: books });
})

export default bookRoutes;