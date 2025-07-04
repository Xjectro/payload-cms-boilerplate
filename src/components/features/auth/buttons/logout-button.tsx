'use client';

import { Button } from '@/components/ui/primitives/button';

import { logoutUser } from '@/lib/auth';

export function LogoutButton() {
  return (
    <Button variant="outline" onClick={() => logoutUser()}>
      Logout
    </Button>
  );
}
