// import { NextResponse, NextRequest } from "next/server"

// import {connect, close} from "@/libs/mongodb"
// import Logs from "@/models/Logs"

// export async function POST(request: NextRequest) {
//   const { account, cpoint, bpoint, apoint, admin, img } = await request.json()
//   await connect()
//   await Logs.create({ account, cpoint, bpoint, apoint, admin, img })
//   close();
//   return NextResponse.json(
//     { message: "The data has been added to the your database collection" },
//     { status: 201 }
//   )
// }

// export async function GET() {
//   await connect()
//   const logs = await Logs.find()
//   close();
//   return NextResponse.json({ logs })
// }

// // export async function DELETE(request) {
// //   const id = request.nextUrl.searchParams.get("id")
// //   await ConnectDB()
// //   await Logs.findByIdAndDelete(id)
// //   return NextResponse.json(
// //     { message: "The data has been added to the your database collection" },
// //     { status: 201 }
// //   )
// // }

// // export async function GET() {
// //   await ConnectDB()
// //   const logs = await Logs.find()
// //   return NextResponse.json({ logs })
// // }
