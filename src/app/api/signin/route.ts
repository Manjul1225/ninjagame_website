import { NextResponse, NextRequest } from "next/server"
import { connect, close } from "@/libs/mongodb"
import Users from "@/models/Users"
import * as jose from 'jose';
import bcrypt from 'bcrypt';
const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function POST(request: NextRequest, response: NextResponse) {
    
    // Function to generate a JWT token
    const generateJwtToken = async (payload) => {
      const jwtToken =  new jose.SignJWT(payload)
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .setExpirationTime('1h')
                        .sign(new TextEncoder().encode(secretKey));  
      return jwtToken;
    };
    try {
        connect();
        let { username, password } = await request.json();
        let user = await Users?.findOne({ username: username });
        
        // User is not existed
        if(user === null){
          return NextResponse.error();
          // return NextResponse.json({status:401, message: "Username is not existed" });
        }
        
        // Password did not match
        let isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return NextResponse.error();
          // NextResponse.json({ status:402, message: "Invalid password" });
        }
        // Generate the token and set the cookie
        let token = await generateJwtToken({'user_name':username, 'password': password});
        response = NextResponse.json({status:200, message: "User authenticated", token:token });
        
        return response
      } catch (error) {
        return NextResponse.error();
        // NextResponse.json({status: 500, message: "Unknown Error"});
      }
}