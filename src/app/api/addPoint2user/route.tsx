import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        connect()
        const { username, amount } = await request.json();
        const user = await Users?.findOne({ username: username });
        if(user !== null){
            user.point = user.point + amount;
            await user?.save();
            return NextResponse.json({status:200, message: "Success"});
        }
        return NextResponse.json({status:401, message: "Username is not existed"});
    }catch (error) {
        return NextResponse.json({StaticRange:500, message: "Unknown Error"});
    }
}