import { MongoClient, ServerApiVersion } from 'mongodb'

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
    const database = client.db('Library')
    return database.collection('books')
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}

export class BookModel {
  static async find () {
    const db = await connect()
    return db.find({}).toArray()
  }

  static async create ({ input }) {
    const db = await connect()
    const { insertedId } = await db.insertOne(input)

    return {
      id: insertedId,
      ...input
    }
  }
}
