import { Section, Container } from '@/components/ui/design-system';
import { User as UserIcon } from 'lucide-react';
import { LogoutButton } from '@/components/features/auth/buttons/logout-button';

import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';

import type { User } from '@/payload-types';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const user: User | null = await getUser();

  if (!user) {
    redirect('/login');
  }

  const createdAt = user.createdAt ? new Date(user.createdAt) : new Date();
  const now = new Date();
  const formattedCreatedAt = createdAt.toLocaleDateString();
  const accountAgeDays = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <>
      <Section>
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-xl">Dashboard</h1>
            <LogoutButton />
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <UserProfile user={user} accountAgeDays={accountAgeDays} />
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-lg">Account Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account type</span>
                  <span className="font-medium capitalize">{user.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account age</span>
                  <span className="font-medium">{accountAgeDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created at</span>
                  <span className="font-medium">{formattedCreatedAt}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

const UserProfile = ({ user, accountAgeDays }: { user: User; accountAgeDays: number }) => {
  return (
    <div className="space-y-4 rounded-lg border p-6">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-3">
          <UserIcon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h2 className="text-lg">Welcome, {user.email}</h2>
          <p className="text-sm text-muted-foreground">
            Member for {accountAgeDays} {accountAgeDays === 1 ? 'day' : 'days'}
          </p>
        </div>
      </div>

      <p className="text-muted-foreground">
        This is your secure dashboard where you can manage your account settings and access
        protected features.
      </p>
    </div>
  );
};
