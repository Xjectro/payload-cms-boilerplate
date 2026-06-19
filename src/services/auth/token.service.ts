'use server';

import { cookies } from 'next/headers';
import { ACCESS_TOKEN_KEY } from './token.constants';

/**
 * ACCESS TOKEN
 */
export async function getAccessToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(ACCESS_TOKEN_KEY)?.value ?? null;
}

export async function setAccessToken(token: string): Promise<void> {
  const store = await cookies();

  if (!store.set) {
    throw new Error('Cannot set cookies in this execution context');
  }

  store.set(ACCESS_TOKEN_KEY, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export async function clearAccessToken(): Promise<void> {
  const store = await cookies();

  if (!store.delete) {
    throw new Error('Cannot delete cookies in this execution context');
  }

  store.delete(ACCESS_TOKEN_KEY);
}

/**
 * AUTH STATE HELPERS
 */
export async function isAuthenticated(): Promise<boolean> {
  return (await getAccessToken()) !== null;
}
