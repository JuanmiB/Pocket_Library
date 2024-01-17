import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_CNN)
    console.log('Base de datos conectada y online')
  } catch (error) {
    console.log(error)
    throw new Error('Error connecting to the db')
  }
}

export const connectDb = async () => {
  await dbConnection()
}
