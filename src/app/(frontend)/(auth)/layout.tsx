import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';

import { Footer } from '@/components/site/footer';
import { Container, Section } from '@/components/ds';

import type { User } from '@/payload-types';
import type { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const user: User | null = await getUser();

  if (user) {
    redirect('/login');
  }

  return (
    <>
      <main className="flex-1 my-8">
        <Section>
          <Container>{children}</Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
