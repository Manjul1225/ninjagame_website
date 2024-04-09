import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function middleware(request: NextRequest) {
  // const token = request.get("token");
  // console.log(token);
  
  // if (request.url.endsWith('/admin')) {
  //     return NextResponse.redirect(new URL('/', request.url));
  // }

  // if (request.url.endsWith('/signin') && token) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // if (token) {
  //   try {
  //     await jose.jwtVerify(token, new TextEncoder().encode(secretKey), {
  //       algorithms: ['HS256'],
  //     });
  //   } catch (error) {
  //     return NextResponse.redirect(new URL('/signin', request.url));
  //   }
  // }
  return NextResponse.next(); 
}

export const config = {
  matcher: ['/admin', '/signin'],
};