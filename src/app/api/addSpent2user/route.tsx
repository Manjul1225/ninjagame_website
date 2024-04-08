import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { username, amount } = await request.json();
        const client = await connect();
        const collection = client?.db.collection("Users");
        const user = await collection?.findOne({ name: username });
        if(user){
            user.totalSpent = user.totalSpent + amount;
            return NextResponse.json({message: "Success"});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}