import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function middleware(request: NextRequest) {
  const token = request.headers.get("Authorization");
  console.log(token);

  // if (!token) {
  //   return NextResponse.redirect(new URL('/signin', request.url));
  // }

  try {
    // await jose.jwtVerify(token, new TextEncoder().encode(secretKey), {
    //   algorithms: ['HS256'],
    // });
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
}

export const config = {
  matcher: ['/api/:path*', '/store', '/about', '/admin', '/signin'],
};