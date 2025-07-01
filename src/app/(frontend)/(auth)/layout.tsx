import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';

import { Footer } from '@/components/common/footer';
import { Container, Section } from '@/components/ui/design-system';

import type { User } from '@/payload-types';
import type { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const user: User | null = await getUser();

  if (user) {
    redirect('/login');
  }

  return (
    <>
      <main className="my-8 flex-1">
        <Section>
          <Container>{children}</Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
