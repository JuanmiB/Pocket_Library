import { useState } from 'react'
import { createPortal } from 'react-dom'
import LibroFormulario from './Formulario'
import './Portal.css'
export default function Portal () {
  const [show, setShow] = useState(false)
  return (
        <div>
            <button 
            className='addBook-btn'
            onClick={() => setShow(true)}>Add a book 📔</button>
            {show && createPortal(
                <Modal
                onClose={() => setShow(false)}
                />,
                document.body
            )
            }
        </div>
  )
}

const Modal = ({ onClose }) => {
  return (
        <div className='modal' >
          <div className='modal-content'>
        <LibroFormulario onClose={onClose}/>
        <button onClick={onClose}>Close Modal</button>
          </div>
        </div>
  )
}
