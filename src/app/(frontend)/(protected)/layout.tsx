import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';

import type { User } from '@/payload-types';
import type { PropsWithChildren } from 'react';

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const user: User | null = await getUser();

  if (!user) {
    redirect('/login');
  }

  return children;
}
