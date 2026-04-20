import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Main } from '@/components/ui/design-system';
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
