import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function GET() {
    try {
        connect()
        const users = await Users?.find();
        close();
        if(users) {
            return NextResponse.json({users: users});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}