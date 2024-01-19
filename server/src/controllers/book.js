import { BookModel } from '../models/book.js'
import { validateBook, validateBookUpdate } from '../schemas/book.js'
export class BookController {
  static async create (req, res) {
    try {
      const result = await validateBook(req.body.input)
      if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(422).json(result)
      }
      const newBook = await BookModel.create({ input: result.data })

      res.status(201).json(newBook)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        success: false,
        errors: [
          {
            field: 'server',
            message: 'Internal Server Error'
          }
        ]
      })
    }
  }

  static async getAll (req, res) {
    const allUsers = await BookModel.find()
    res.status(200).json(allUsers)
  }

  static async getById (req, res) {
    const { id } = req.params
    const user = await BookModel.findById({ id })
    if (!user) {
      return res.status(404).json({
        success: false,
        errors: [
          {
            field: 'id',
            message: 'Id does not exist'
          }
        ]
      })
    }
    return res.json(user)
  }

  static async update (req, res) {
    const result = validateBookUpdate(req.body)
    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(422).json(result)
    }
    const { id } = req.params

    const updateBook = await BookModel.update({ id, input: result.data })
    if (!updateBook) {
      return res.status(404).json({
        success: false,
        errors: [
          {
            field: 'id',
            message: 'Id does not exist'
          }
        ]
      })
    }
    return res.json(updateBook)
  }

  static async delete (req, res) {
    const { id } = req.params
    const deleteUser = await BookModel.delete({ id })
    if (!deleteUser) {
      return res.status(404).json({
        success: false,
        errors: [
          {
            field: 'id',
            message: 'Id does not exist'
          }
        ]
      })
    }
    return res.json(deleteUser)
  }
}
