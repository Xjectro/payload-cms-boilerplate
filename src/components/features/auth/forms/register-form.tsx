'use client';

import { SubmitButton } from '@/components/ui/forms/submit-button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/primitives/form';
import { Input } from '@/components/ui/primitives/input';
import { Checkbox } from '@/components/ui/primitives/checkbox';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema } from '@/utils/validations/auth';

import { registerUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

import type { LoginResponse } from '@/lib/auth';
import type { RegisterSchema } from '@/utils/validations/auth';

export function RegisterForm() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      termsAccepted: false,
    },
  });

  async function onSubmit(values: RegisterSchema) {
    const res: LoginResponse = await registerUser(values);
    if (res.error) {
    } else {
      redirect('/login');
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
              <FormDescription>Your password must be at least 6 characters long.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                Please confirm your password. It must match the password above.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center gap-2">
              <FormControl>
                <Checkbox
                  id="termsAccepted"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel htmlFor="termsAccepted">Accept terms</FormLabel>
            </FormItem>
          )}
        />

        <SubmitButton loading={form.formState.isSubmitting} text="Sign Up" />
      </form>
    </Form>
  );
}
