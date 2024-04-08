import { NextResponse, NextRequest } from "next/server"
import {connect, close} from "@/libs/mongodb"
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest, response: NextResponse) {
    const secretKey = process.env.NEXT_PUBLIC_SecretKey;

    // Function to generate a JWT token
    const generateJwtToken = (payload) => {
        const token = jwt.sign(payload, secretKey, {expiresIn: '1h'});
        return token;
    };
    try {
        const { username, password } = await request.json();
        const client = await connect();
        const collection = client?.db.collection("Users");
        const user = await collection?.findOne({ name: username });
        if (!(user.password == password)) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
          }
        close();
        // const token = generateJwtToken({'user_name':username, 'password': password});
        // cookies().set('token', token, { expires: 24*60*60*1000, path:"/", httpOnly: true });
        return NextResponse.json({ user }, { status: 200 });
      } catch (error) {
        return NextResponse.error();
      }
}