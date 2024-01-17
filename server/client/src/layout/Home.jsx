import { Header } from '../layout/Header'
import BookCard  from '../components/BookCard'
import '../app.css'
import { useState, useEffect } from 'react'
import SpringModal from '../components/materialUi/SpringModal'

const Home = () => {
  const [books, setBooks] = useState([{
    title: '',
    author: '',
    description: '',
    _id: '231'

  }])
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
        <div className='app-container'>
        <SpringModal/>
        <section className='books-section'>
         {
           books.map((book, index) => (
             <BookCard key={index} book={book} onDelete={handleDelete} />
             ))
          }
        </section>
            </div>
    </>
  )}

  export default Home