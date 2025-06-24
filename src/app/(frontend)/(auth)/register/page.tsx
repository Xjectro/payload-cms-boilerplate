import { RegisterForm } from '@/components/auth/register-form'
import { AuthBox } from '@/components/auth/auth-box'

import Link from 'next/link'

export default async function RegisterPage() {
  return (
    <AuthBox>
      <h1>Sign Up</h1>
      <RegisterForm />
      <p className="text-muted-foreground text-sm">
        Already have an account?{' '}
        <Link className="text-foreground" href="/login">
          Login Now
        </Link>
      </p>
    </AuthBox>
  )
}
