import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
connect()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const {username}  = await request.json();
        console.log(request.body);
        const user = await Users?.findOne({ name: username });
        
        if(user) {
            return NextResponse.json({user: user});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}