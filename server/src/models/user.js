import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import bcrypt from 'bcrypt'

const uri = 'mongodb+srv://juanmi_b:Ps2dIPJydMlbRPxx@cluster0.2tsjmfk.mongodb.net/firstDB'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function connect () {
  try {
    await client.connect()
    const database = client.db('Usuarios')
    return database.collection('users')
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}

export class UserModel {
  static async getAll (to, limit) {
    const db = await connect()
    return db.find({})
      .skip(parseInt(to))
      .limit(parseInt(limit)).toArray()
  }

  static async findById ({ id }) {
    const objectId = new ObjectId(id)
    const db = await connect()
    return db.findOne({ _id: objectId })
  }

  static async create ({ input }) {
    const db = await connect()
    // Verifico si el email ya existe
    const user = await db.findOne({ email: input.email })
    if (user) {
      return null
    }

    const salt = bcrypt.genSaltSync()
    input.password = bcrypt.hashSync(input.password, salt)
    const { insertedId } = await db.insertOne(input)

    return {
      id: insertedId,
      ...input
    }
  }

  static async update ({ id, input }) {
    const objectId = new ObjectId(id)
    try {
      await client.connect()
      const database = client.db('Usuarios')
      const result = await database.collection('users').findOneAndUpdate(
        { _id: objectId },
        { $set: input },
        { returnDocument: 'after' }
        // Cambiado de 'returnNewDocument' a 'returnDocument'
      )
      console.log('Result:', result)
      if (!result) return false // Si no encuentra el id, result es false
      return result
    } catch (error) {
      console.error('Error al actualizar el documento:', error)
      return false
    }
  }

  static async delete ({ id }) {
    const objectId = new ObjectId(id)
    try {
      await client.connect()
      const database = client.db('Usuarios')
      const result = await database.collection('users').deleteOne({ _id: objectId })
      if (!result) return false // Si no encuentra el id, result es false
      return result
    } catch (error) {
      console.error('Error al actualizar el documento:', error)
      return false
    }
  }
}
