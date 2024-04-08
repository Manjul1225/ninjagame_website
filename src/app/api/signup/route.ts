import { NextResponse, NextRequest } from "next/server"
import { connect, close } from "@/libs/mongodb"
import bcrypt from 'bcrypt';
const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { username, email, password } = await request.json();
        const client = await connect();
        const collection = client?.db.collection("Users");
        
        // Check user is exist
        const user = await collection?.findOne({ email: email });
        if(user){
            return NextResponse.json({ message: "User is already existed" });  
        }
        // Register
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await collection?.add({ name: username, email: email, password:hashedPassword, point: 0, totalSpent: 0 });
        if(newUser){
            return NextResponse.json({ message: "OK" });  
        }
        return NextResponse.json({ message: "Failed" });
      } catch (error) {
        return NextResponse.json({message: "Unknown Error"});
      }
}