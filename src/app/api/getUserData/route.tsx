import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        connect();
        const {username}  = await request.json();
        const user = await Users?.findOne({ username: username });
        close();
        return NextResponse.json({status:200, user: user});
    }catch (error) {
        return NextResponse.json({status:404, message: "Failed"});
    }
}