import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        connect();
        const {username}  = await request.json();
        console.log(request.body);
        const user = await Users?.findOne({ name: username });
        close();
        if(user) {
            return NextResponse.json({user: user});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}