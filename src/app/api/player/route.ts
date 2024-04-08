// import { NextResponse, NextRequest } from "next/server"
// import {connect, close} from "@/libs/mongodb"
// import Users from "@/models/Users"

// // export async function POST(request: NextRequest) {
// //   const { account, cpoint, bpoint, apoint, admin, img } = await request.json()
// //   await ConnectDB()
  
// //   await Logs.create({ account, cpoint, bpoint, apoint, admin, img })
// //   return NextResponse.json(
// //     { message: "The data has been added to the your database collection" },
// //     { status: 201 }
// //   )
// // }

// export async function GET(request: NextRequest) {
//   try {
//     const { username } = await request.json();
//     const client = await connect();
//     const collection = client.db.collection("Users");
//     const user = await collection.findOne({ name: username });
//     if (!user) {
//         return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }
//     close();
//     return NextResponse.json({ user }, { status: 200 });
//   } catch (error) {
//     close();
//     return NextResponse.error();
//   }
// }