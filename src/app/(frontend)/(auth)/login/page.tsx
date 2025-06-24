import { LoginForm } from '@/components/auth/login-form'
import { AuthBox } from '@/components/auth/auth-box'

import Link from 'next/link'

export default async function LoginPage() {
  return (
    <AuthBox>
      <h1>Login</h1>
      <LoginForm />
      <p className="text-muted-foreground text-sm">
        Don&apos;t have an account?{' '}
        <Link className="text-foreground" href="/register">
          Sign Up Now
        </Link>
      </p>
    </AuthBox>
  )
}
