import { mongoose } from "mongoose"

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
    console.log("connected to mongodb")
  } catch (error) {
    console.log(error)
  }
}

export default ConnectDB