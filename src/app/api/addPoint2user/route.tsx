import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
connect()

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { username, amount } = await request.json();
        const user = await Users?.findOne({ name: username });
        if(user){
            user.point = user.point + amount;
            await user.save();
            return NextResponse.json({message: "Success"});
        }
        return NextResponse.json({message: "Failed"});
    }catch (error) {
        return NextResponse.json({message: "Unknown Error"});
    }
}