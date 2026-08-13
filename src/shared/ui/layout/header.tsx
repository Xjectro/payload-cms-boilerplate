import { Button } from '@/shared/ui/primitives/button';
import { Nav } from '@/shared/ui/react/design-system';

import Image from 'next/image';
import Link from 'next/link';

import type { User } from '@/payload/payload-types';

export async function Header() {
  return (
    <Nav
      className="bg-accent/30 sticky top-0 border-b backdrop-blur-md"
      containerClassName="flex justify-between items-center gap-4"
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/favicon.ico"
          width={24}
          height={24}
          alt="Payload CMS Boilerplate"
          className="invert dark:invert-0"
        />
        <h3 className="sm:text-lg">Payload CMS Boilerplate</h3>
      </Link>
    </Nav>
  );
}
