import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import './Formulario.css'
import ControlledSwitches from './materialUi/ControlledSwitch'

const LibroFormulario = ({onClose}) => {
  const [formulario, setFormulario] = useState({
    title: '',
    description: '',
    pages: 0,
    author: '',
    genre: [],
    read: null,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormulario({
      ...formulario,
      [name]: name === 'pages' || name === 'year' ? parseInt(value, 10) : value
    })
  }

  const handleGeneroChange = (e) => {
    const options = e.target.options
    const generos = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        generos.push(options[i].value)
      }
    }
    setFormulario({
      ...formulario,
      genre: generos
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('formulario', formulario)
    try {
      // Envia los datos al servidor
      const response = await fetch('http://localhost:3000/api/v8/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: formulario })
      })

      if (response.ok) {
        // Maneja la respuesta del servidor
        const data = await response.json()
        console.log('Respuesta del servidor:', data)
      } else {
        console.error('Error al enviar datos al servidor:', response.statusText)
      }
    } catch (error) {
      console.error('Error de red:', error)
      if (error.response) {
        // Imprime la respuesta del servidor en la consola
        console.log('Respuesta del servidor:', await error.response.json())
      }
    }
  }

  return (
    <div className='form-container'>
      <form
      onSubmit={handleSubmit}
      className='flex flex-col'
      >
        <label htmlFor="title">Título del Libro:</label>
        <input type="text" id="title" name="title" value={formulario.title} onChange={handleChange} required />

        <label htmlFor="author">Autor</label>
        <input type="text" id='author' name='author' value={formulario.author} onChange={handleChange} required/>

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={formulario.description} onChange={handleChange} maxLength={100} required />

        <label htmlFor="pages">Cantidad de Páginas:</label>
        <input type="number" id="pages" name="pages" value={formulario.pages} onChange={handleChange} required />

        <label htmlFor="genre">Género:</label>
        <select id="genre" name="genre" multiple onChange={handleGeneroChange} required>
          <option value="Aventura">Aventura</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Drama">Drama</option>
          <option value="Fantasía">Fantasía</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>
    <div className='book-status'>
   <ControlledSwitches/>
    </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default LibroFormulario
