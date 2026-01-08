import db from './db/index.js';
import books from './data/books.js';

const dataSeed = async () => {
    try {
        // Delete previous data
        await db.query('TRUNCATE books');
        console.log('old books deleted');

        // New data input
        for (const book of books) {
            const query = `INSERT INTO books (isbn, title, author, format)
                VALUES ($1, $2, $3, $4)`;
            const VALUES = [
                book.isbn,
                book.title,
                book.author,
                // If no format, fill with NA
                book.format || 'NA'
            ]

            await db.query(query, VALUES);
            console.log(`${book.title} Loaded`);
        }

        console.log('All books have been loaded');
        process.exit();

    } catch (error) {
        console.error('Data Load Failed', error);
        process.exit(1);
        }
};

dataSeed();