'use client';

import { SubmitButton } from '@/components/auth/submit-button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema } from '@/utils/schemas/auth';

import { loginUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

import type { LoginResponse } from '@/lib/auth';
import type { LoginSchema } from '@/utils/schemas/auth';

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(values: LoginSchema) {
    const res: LoginResponse = await loginUser(values);
    if (res.error) {
    } else {
      redirect('/dashboard');
    }
  }

  return (
    <Form {...form}>
      <form className="my-6 grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Enter your email address. This will be used for account verification and
                notifications.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                Enter your password. It must be at least 6 characters long.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-2">
              <FormControl>
                <Checkbox id="rememberMe" checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel htmlFor="rememberMe">Remember me</FormLabel>
            </FormItem>
          )}
        />

        <SubmitButton loading={form.formState.isSubmitting} text="Login" />
      </form>
    </Form>
  );
}
