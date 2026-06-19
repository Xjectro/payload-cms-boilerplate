'use server';

import { cookies } from 'next/headers';
import { CACHE_ID_KEY } from './cache.constants';

/**
 * CACHE ID
 */
export async function getCacheId(): Promise<string | null> {
  const store = await cookies();
  return store.get(CACHE_ID_KEY)?.value ?? null;
}
