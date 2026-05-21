import { Footer } from '@/features/common/components/footer';
import { Header } from '@/features/common/components/header';
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
