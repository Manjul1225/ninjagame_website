import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
import Logs from "@/models/Logs";
connect();

export async function GET() {
    try {
        const logs = await Logs.find();
        return NextResponse.json({status:200, logs: logs});
    }catch (error) {
        return NextResponse.json({status:404, message: "Failed"});
    }
}

export async function POST(request:NextRequest, response:NextResponse) {
    try {
        const { account, cpoint, bpoint, apoint, admin, img } = await request.json();
        const user = await Users.findOne({username: account})
        if(user)
            await Logs.create({account: account, cpoint:cpoint, bpoint:bpoint, apoint:apoint, admin:admin, img:img});
        else return NextResponse.json({status:401, message:"User does not exist"});
        return NextResponse.json({status:200});
    }catch (error) {
        return NextResponse.json({status:404, message: "Failed"});
    }
}