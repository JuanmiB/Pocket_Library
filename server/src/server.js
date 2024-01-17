import express, { json } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { corsMiddleware } from './middleware/cors.js'

import { bookRouter } from './router/book.js'

const app = express()
app.use(express.static('public'))
// app.use(corsMiddleware())
app.use(cors())
app.use(json())
app.disable('x-powered-by')

app.use('/api/v8/books', bookRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto http://localhost:${PORT}/`)
})
