'use server'
import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';
const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export function middleware(request:NextRequest) {
  const token = request.cookies.get('token').value;

  if(!token){
    return NextResponse.redirect(new URL('/signin', request.url));
  } else {
    NextResponse.redirect(new URL('/', request.url));
  }

  try {
    jose.jwtVerify(
      token, new TextEncoder().encode(process.env.NEXT_PUBLIC_SecretKey)
    );
  } catch(error){
    console.log(error);
    
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/^api/(.*)", '/^(store|about|/)', '/admin', '/game', '/signin'],
};