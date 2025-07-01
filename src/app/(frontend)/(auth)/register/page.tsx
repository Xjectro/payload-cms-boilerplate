import { RegisterForm } from '@/components/features/auth/forms/register-form';
import { FormBox } from '@/components/ui/forms/form-box';

import Link from 'next/link';

export default async function RegisterPage() {
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
