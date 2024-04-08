// import { NextResponse, NextRequest } from "next/server"
// import { connect, close } from "@/libs/mongodb"
// import Users from "@/models/Users";
// import bcrypt from 'bcrypt';
// const secretKey = process.env.NEXT_PUBLIC_SecretKey;

// export async function POST(request: NextRequest, response: NextResponse) {
//     try {
//         connect();
//         const { username, email, password } = await request.json();
//         // Check user is exist
//         const user = await Users?.findOne({ username: username });
//         if(user){
//             return NextResponse.json({ message: "User is already existed" });  
//         }
        
//         // Register
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = await Users?.create({
//             name: username,
//             email: email,
//             password: hashedPassword,
//         });
//         close();
//         console.log(newUser);
        
//         if(newUser){
//             return NextResponse.json({ message: "OK" });  
//         }
//         return NextResponse.json({ message: "Failed" });
//       } catch (error) {
//         return NextResponse.json({message: "Unknown Error"});
//       }
// }