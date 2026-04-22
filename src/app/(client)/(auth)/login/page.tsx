import { LoginForm } from '@/features/auth/components/forms/login-form';
import { FormBox } from '@/shared/ui/forms/form-box';

import Link from 'next/link';

export default async function Page() {
  return (
    <FormBox>
      <h1>Login</h1>
      <LoginForm />
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link className="text-foreground" href="/register">
          Sign Up Now
        </Link>
      </p>
    </FormBox>
  );
}
