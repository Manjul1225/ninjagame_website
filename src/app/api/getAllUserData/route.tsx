import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function GET() {
    try {
        connect();
        let users = await Users?.find();
        return NextResponse.json({users: users});
    }catch (error) {
        return NextResponse.json({status:500, message: "Unknown Error"});
    }
}