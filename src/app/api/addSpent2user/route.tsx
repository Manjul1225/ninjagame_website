import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        connect();
        const { username, amount } = await request.json();
        const user = await Users?.findOne({ name: username });
        if(user?.username !== null){
            user.totalSpent = user.totalSpent + amount;
            await user?.save();
            return NextResponse.json({status:200, message: "Success"});
        }
        return NextResponse.json({status:401, message: "Failed"});
    }catch (error) {
        return NextResponse.json({status:500, message: "Unknown Error"});
    }
}