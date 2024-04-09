import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';

const secretKey = process.env.NEXT_PUBLIC_SecretKey;

export async function middleware(request: NextRequest) {
  const token = request.headers.get("token");
  const excludedPaths = ["/admin", "/logs"];

  if (excludedPaths.some(path => request.url.endsWith(path))&& !token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if (token) {
    try {
      await jose.jwtVerify(token, new TextEncoder().encode(secretKey), {
        algorithms: ['HS256'],
      });
    } catch (error) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }
  return NextResponse.next(); 
}

export const config = {
  matcher: ['/store', '/about'],
};