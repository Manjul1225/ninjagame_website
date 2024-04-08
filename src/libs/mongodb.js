import { mongoose } from "mongoose"

export async function connect() {
  const client =  await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI)
  console.log('Connected to MongoDB');
  return client.connection;
}

export async function close() {
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}
