import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Main } from '@/components/ui/design-system';

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main className="flex-1">{children}</Main>
      <Footer />
    </>
  );
}
