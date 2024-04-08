import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const { username } = await request.json();
        const client = await connect();
        const collection = client?.db.collection("Users");
        const user = await collection?.findOne({ name: username });
        if(user) {
            return NextResponse.json({user: user});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}