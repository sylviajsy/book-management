import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

const API_URL = 'http://localhost:8080/dbBooks';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("Data Received:", response.data);
      
    } catch (error) {
      console.error("error:", error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book Management</h1>
    </div>
  )
}

export default App
