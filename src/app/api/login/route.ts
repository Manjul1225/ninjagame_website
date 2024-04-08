import { NextResponse, NextRequest } from "next/server"
import { connect, close } from "@/libs/mongodb"
import Users from "@/models/Users"
import * as jose from 'jose';
import bcrypt from 'bcrypt';
const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function POST(request: NextRequest, response: NextResponse) {
    
    // Function to generate a JWT token
    const generateJwtToken = (payload) => {
      const jwtToken =  new jose.SignJWT(payload)
                        .setProtectedHeader({ alg: 'HS256' })
                        .setIssuedAt()
                        .setExpirationTime('1h')
                        .sign(new TextEncoder().encode(secretKey));  
      return String(jwtToken);
    };
    try {
        const { username, password } = await request.json();
        const client = await connect();
        const collection = client?.db.collection("Users");
        const user = await collection?.findOne({ name: username });
        // User is not existed
        if(!user){
          return NextResponse.json({ message: "Username is not existed" });
        }

        // Password did not match
        if (!(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: "Password Incorrect" });
        }
        close();
        // Generate the token and set the cookie
        const token = generateJwtToken({'user_name':username, 'password': password});
        response = NextResponse.json({
          message: "OK"
        });

        response.cookies.set('token', token, {
          httpOnly: true,
        });
        return response
      } catch (error) {
        return NextResponse.json({message: "Unknown Error"});
      }
}