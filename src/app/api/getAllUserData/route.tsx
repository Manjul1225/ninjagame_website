import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
connect()

export async function GET() {
    try {
        const users = await Users?.find();
        if(users) {
            return NextResponse.json({users: users});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}