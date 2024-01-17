import { Link } from "react-router-dom";
import { useState } from "react";
import "./BookCard.css";
import LongMenu from './materialUi/LongMenu';
export default function BookCard({ book , onDelete}) {
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)

   
const onEdit= () => {
    setIsEditing(!isEditing)
}

    return (
        <div className='book-card'>
            <div className="long-menu">
            <LongMenu bookId={book._id} onDelete={onDelete} onChange={onEdit}/>
            </div>
                {isEditing ? (
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                ) : (
                    <h2>{title}</h2>
                )}
                {isEditing ? (
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                ) : (
                    <h3>{author}</h3>
                )    
                }
                    <Link to={`/book/${book._id}`}>
                <button>Ver detalles</button>
                </Link>
        </div>
    )
}