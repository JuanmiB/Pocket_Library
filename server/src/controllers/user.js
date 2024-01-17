import { UserModel } from '../models/mongodb/user.js'
import { validateUser, validateUserUpdate } from '../schemas/user.js'
export class UserController {
  static async getAll (req, res) {
    try {
      const { to, limit } = req.query
      const users = await UserModel.getAll(to, limit)
      return res.json(users)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Error al obtener usuarios' })
    }
  }

  static async create (req, res) {
    try {
      const result = validateUser(req.body)
      if (!result.success) {
      // 422 Unprocessable Entity
        return res.status(422).json(result)
      }
      const user = await UserModel.create(result.data)
      return res.status(201).json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        errors: [
          {
            field: 'server',
            message: 'Server error'
          }
        ]
      })
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    const user = await UserModel.findById({ id })
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
    const result = validateUserUpdate(req.body)
    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(422).json(result)
    }
    const { id } = req.params

    const updateUser = await UserModel.update({ id, input: result.data })
    if (!updateUser) {
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
    return res.json(updateUser)
  }

  static async delete (req, res) {
    const { id } = req.params
    const deleteUser = await UserModel.delete({ id })
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
