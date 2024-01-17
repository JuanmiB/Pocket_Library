import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookItem.css";
import HalfRating from "../components/materialUi/HalfRating";
export default function BookItem() {
    const { id } = useParams();
    // const [book, setBooks] = useState([
    //     {
    //         title: 'One piece 500 - 600',
    //         isRead: true,
    //         rating: 5,
    //         description: 'Los mugiwaras se van a la isla de los hombres pez'

    //     }
    // ])
    // useEffect(()=>{
    //     fetch(`http://localhost:3000/api/v8/books/${id}`)
    //     .then(res => res.json())
    //     .then(data => {setBooks(data)
    //     console.log('datos del libro:', data)
    //     }
    //     )
    //     .catch(err => console.log(err))
    // },[])
    const book =   {
        title: 'One piece 500 - 600',
        isRead: true,
        rating: 5,
        description: 'Los mugiwaras se van a la isla de los hombres pez'

    }
    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
    }
    return (
        <div style={style}>
            <div className="book-container">
                <div className="rigth-side">
                <h1>{book.title}</h1>
                <p>ACA VA LA IMAGEN DEL LIBRO</p>
                </div>
            <section className="book-info">
            <h3>{book.isRead ? "Leido" : "No leido"}</h3>
            <p>{book.description}</p>
            <p>{book.rating}</p>
            <HalfRating/>
            </section>
            </div>
        </div>
    )
}