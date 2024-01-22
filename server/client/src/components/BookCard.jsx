import { Link } from "react-router-dom";
import { useState } from "react";
import "./BookCard.css";
import LongMenu from './materialUi/LongMenu';
import CardBookLayout from "../layout/CardBookLayout";

export default function BookCard({ book, onDelete, onBookUpdate }) {
    const [isEditing, setIsEditing] = useState(false)
    // Esto se puede unifica en un solo estado
    const [bookInfo, setBookInfo] = useState({
        title: book.title,
        author: book.author
    })
    const updateBook = async () => {
        try {
            await fetch(`http://localhost:3000/api/v8/books/${book._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookInfo),
                
            });
            onBookUpdate();
        } catch (error) {
            console.error('Error al actualizar el objeto:', error);
        }
    }

    return (
        <CardBookLayout>
            <div className="long-menu">
                <LongMenu bookId={book._id} onDelete={onDelete} changeEdit={setIsEditing} bookState={isEditing} />
            </div>

            {isEditing ? (
                <div className="book-input">
                    <input 
                    type="text" 
                    value={bookInfo.title} 
                    onChange={(e) => setBookInfo((prev) => {
                        return{  
                            ...prev,
                            title: e.target.value
                        }
                    })} 
                    />  
                            <input type="text" value={bookInfo.author} onChange={(e) => setBookInfo((prev) => {
                        return{  
                            ...prev,
                            author: e.target.value
                        }
                    })} 
                    /> 
                    <button
                    onClick={() => {
                        setIsEditing(false)
                        // Aquí se debe hacer la solicitud para actualizar el libro
                        updateBook()
                    }
                    }
                    >Save info</button>
                </div>) : (
                <>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </>
            )
            }


            <Link to={`/book/${book._id}`}>
                <button>Ver detalles</button>
            </Link>
        </CardBookLayout>
    )
}