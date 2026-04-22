import { redirect } from 'next/navigation';
import { getUser } from '@/shared/lib/auth';

import { Footer } from '@/features/common/components/footer';
import { Container, Section } from '@/shared/ui/design-system';

import type { User } from '@/payload-types';
import { Fragment, type PropsWithChildren } from 'react';

export const dynamic = 'force-dynamic';

export default async function AuthTemplate({ children }: PropsWithChildren) {
  const user: User | null = await getUser();

  if (user) {
    redirect('/login');
  }

  return (
    <Fragment>
      <main className="my-8 flex-1">
        <Section>
          <Container>{children}</Container>
        </Section>
      </main>
      <Footer />
    </Fragment>
  );
}
