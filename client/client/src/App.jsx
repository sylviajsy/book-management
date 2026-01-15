import { useState } from 'react'
import axios from 'axios';
import './App.css'

const API_URL = 'http://localhost:8080/dbBooks';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);

    } catch (error) {
      console.error("error:", error);
    }
  }

  return (
    
  )
}

export default App
