import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"

export async function GET() {
    try {
        const client = await connect();
        const collection = client?.db.collection("Users");
        const users = await collection?.find();
        if(users) {
            return NextResponse.json({users: users});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}