'use client';

import { Button } from '@/shared/ui/primitives/button';

import { logoutUser } from '@/shared/lib/auth';

export function LogoutButton() {
  return (
    <Button variant="outline" onClick={() => logoutUser()}>
      Logout
    </Button>
  );
}
