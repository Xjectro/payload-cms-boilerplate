import { LogoutButton } from '@/components/auth/logout-button';
import { Button } from '../ui/button';
import { Nav } from '@/components/ds';

import Image from 'next/image';
import Link from 'next/link';

import { getUser } from '@/lib/auth';

import type { User } from '@/payload-types';

export async function Header() {
  const user: User | null = await getUser();

  return (
    <Nav
      className="sticky top-0 border-b bg-accent/30 backdrop-blur-md"
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

      <div className="flex gap-2">
        {user ? (
          <>
            <LogoutButton />
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </>
        )}
      </div>
    </Nav>
  );
}
