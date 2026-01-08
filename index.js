import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';
import dbRoutes from './routes/dbRoutes.js';

const app = express();

// Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

// For client/Interface
app.use(cors());
app.use(express.json());

// Mount the book routes (JSON)
// Any request starting with '/books' will be handled by bookRoutes
app.use('/books', bookRoutes);

app.use('/dbBooks', dbRoutes);

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`JSON API: http://localhost:${PORT}/books`);
  console.log(`DB   API: http://localhost:${PORT}/dbBooks`);
});