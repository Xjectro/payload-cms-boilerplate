import { Footer } from '@/shared/ui/layout/footer';
import { Header } from '@/shared/ui/layout/header';
import { Main } from '@/shared/ui/react/design-system';
import { Fragment } from 'react';

export const dynamic = 'force-dynamic';

export default async function PublicTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <Main className="flex-1">{children}</Main>
      <Footer />
    </Fragment>
  );
}
