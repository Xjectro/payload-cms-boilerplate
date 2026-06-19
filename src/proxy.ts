import { NextRequest, NextResponse } from 'next/server';
import { CACHE_ID_KEY } from './services/auth/cache.constants';

export default async function proxy(request: NextRequest) {
  let cacheIdCookie = request.cookies.get(CACHE_ID_KEY);
  let cacheId = cacheIdCookie?.value || crypto.randomUUID();

  const response = NextResponse.next();

  if (!cacheIdCookie) {
    response.cookies.set(CACHE_ID_KEY, cacheId, {
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.[\\w]+$).*)'],
};
