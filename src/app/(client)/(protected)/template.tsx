import { redirect } from 'next/navigation';
import { getUser } from '@/shared/lib/auth';

import type { User } from '@/payload-types';
import type { PropsWithChildren } from 'react';

export const dynamic = 'force-dynamic';

export default async function ProtectedTemplate({ children }: PropsWithChildren) {
  const user: User | null = await getUser();

  if (!user) {
    redirect('/login');
  }

  return children;
}
