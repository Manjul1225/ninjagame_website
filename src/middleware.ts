import { NextRequest, NextResponse } from 'next/server';
import jwt from "jsonwebtoken";
const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export function middleware(request:NextRequest) {
  const token = request.cookies.get('token').value;

  if(!token){
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  try {
    jwt.verify(token, secretKey);
  } catch(error){
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/^api/(.*)", '/^(store|about|/)', '/admin', '/game'],
};