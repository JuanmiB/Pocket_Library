import BookCard from '../components/BookCard'
import '../app.css'
import { useState, useEffect } from 'react'
import SpringModal from '../components/materialUi/SpringModal'
import AppLayout from './AppLayout.jsx'
import BookSection from './BookSection.jsx'

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v8/books');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [refresh]);

  const handleDelete = (bookId) => {
    setBooks(books.filter(book => book._id !== bookId));
  };

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return (
    <>
      <AppLayout>
        <SpringModal onRefresh={handleRefresh} />
        <BookSection>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            books.map((book, index) => (
              <BookCard 
              key={index} 
              book={book} 
              onDelete={handleDelete} 
              onBookUpdate={handleRefresh} 
              />
            ))
          )}
        </BookSection>
      </AppLayout>
    </>
  );
}

export default Home;
