import { Router } from 'express'
import { BookController } from '../controllers/book.js'
export const bookRouter = Router()
bookRouter.get('/', BookController.getAll)
bookRouter.post('/', BookController.create)
bookRouter.get('/:id', BookController.getById)
bookRouter.patch('/:id', BookController.update)
bookRouter.delete('/:id', BookController.delete)
