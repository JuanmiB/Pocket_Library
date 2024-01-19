import { Header } from '../layout/Header'
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
  useEffect(() => {
    fetch('http://localhost:3000/api/v8/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data)
        setLoading(false)
        console.log("data", data);
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])
  const handleDelete = (bookId) => {
    setBooks(books.filter(book => book._id !== bookId));
  };

  return (
    <>
      <AppLayout>
        <SpringModal />
        <BookSection>
          {
            books.map((book, index) => (
              <BookCard key={index} book={book} onDelete={handleDelete} />
            ))
          }
        </BookSection>
      </AppLayout>

    </>
  )
}

export default Home