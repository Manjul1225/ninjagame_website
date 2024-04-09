import { connect, close } from "@/libs/mongodb"
import { NextResponse, NextRequest } from "next/server"
import Users from "@/models/Users";
connect();

export async function POST(request:NextRequest, response:NextResponse) {
    try {
        const { id } = await request.json();
        const user = await Users.findOne({_id: id})
        if(user != null)
            await Users.deleteOne({_id: id});
        return NextResponse.json({status:200});
    }catch (error) {
        return NextResponse.json({status:404, message: "Failed"});
    }
}