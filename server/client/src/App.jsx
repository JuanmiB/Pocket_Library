import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './layout/Home.jsx';
import BookItem from './layout/BookItem.jsx';
import { Header } from './layout/Header.jsx';


function App() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookItem />} />
            </Routes>
            </BrowserRouter>
    
    )
  };
export default App;