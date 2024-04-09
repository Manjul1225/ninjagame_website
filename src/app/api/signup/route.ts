import { NextResponse, NextRequest } from "next/server";
import { connect, close } from "@/libs/mongodb";
import Users from "@/models/Users";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        await connect();
        let { username, email, password } = await request.json();
        
        let user1 = await Users.findOne({ username: username });
        if(user1 !== null){
            return NextResponse.json({ status: 401, message: "Username already exists" });  
        }
        
        let user2 = await Users.findOne({ email: email });
        if(user2 !== null){
            return NextResponse.json({ status: 402, message: "Email already exists" });  
        }
        
        let hashedPassword = await bcrypt.hash(password, 6);
        await Users.create({
            username: username,
            email: email,
            password: hashedPassword,
        });
        
        return NextResponse.json({ status: 200, message: "User created successfully" });  
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Internal server error" });
    }
}