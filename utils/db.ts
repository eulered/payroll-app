import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string)
  } catch (error) {
    throw new Error('Connection Failed')
  }
}

export default connect