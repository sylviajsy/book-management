import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.use('/books', bookRoutes);

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});