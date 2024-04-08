import { NextResponse, NextRequest } from "next/server"
import { connect, close } from "@/libs/mongodb"
import Users from "@/models/Users";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        connect();
        const { username, email, password } = await request.json();
        // Check user is exist
        const user1 = await Users?.findOne({ username: username });
        const user2 = await Users?.findOne({ email: email });
        if(user1 || user2) {
            return NextResponse.json({ message: "User is already existed" });  
        }
        
        // Register
        const hashedPassword = await bcrypt.hash(password, 6);
        const newUser = await Users?.create({
            username: username,
            email: email,
            password: hashedPassword,
        });
        close();
        
        if(newUser){
            return NextResponse.json({ message: "Successfully signedup" });  
        }
        return NextResponse.json({ message: "Failed" });
      } catch (error) {
        return NextResponse.json({message: "Unknown Error"});
      }
}