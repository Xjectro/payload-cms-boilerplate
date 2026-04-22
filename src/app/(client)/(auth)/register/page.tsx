import { RegisterForm } from '@/features/auth/components/forms/register-form';
import { FormBox } from '@/shared/ui/forms/form-box';

import Link from 'next/link';

export default async function Page() {
  return (
    <FormBox>
      <h1>Sign Up</h1>
      <RegisterForm />
      <p className="text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link className="text-foreground" href="/login">
          Login Now
        </Link>
      </p>
    </FormBox>
  );
}
