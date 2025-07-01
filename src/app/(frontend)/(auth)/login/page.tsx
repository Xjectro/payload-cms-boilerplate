import { LoginForm } from '@/components/features/auth/forms/login-form';
import { FormBox } from '@/components/ui/forms/form-box';

import Link from 'next/link';

export default async function LoginPage() {
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
