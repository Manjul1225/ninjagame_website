import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
connect();
export async function POST(request: NextRequest, response: NextResponse) {
    try {
        let {username}  = await request.json();
        // console.log(username);
        let user = await Users?.findOne({ username: username });

        if(user !== null) { 
            return NextResponse.json({status:200, user: user});
        }
        return NextResponse.json({status:404, message: "Failed"});
    }catch (error) {
        return NextResponse.json({status:404, message: "Failed"});
    }
}