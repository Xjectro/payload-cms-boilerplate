'use server';

import { cookies, headers as getHeaders } from 'next/headers';
import { getPayload } from 'payload';
import type { Payload } from 'payload';
import config from '@payload-config';
import configPromise from '@payload-config';
import { redirect } from 'next/navigation';
import type { User } from '@/payload-types';

// Auth Types

type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

type RegisterParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  error?: string;
  errorCode?: string;
};

export type Result = {
  exp?: number;
  token?: string;
  user?: User;
};

export type RegisterResponse = {
  success: boolean;
  error?: string;
  errorCode?: string;
};

// Auth Actions

/**
 * Get the currently authenticated user
 * @returns The authenticated user or null if not authenticated
 */
export async function getUser(): Promise<User | null> {
  try {
    const headers = await getHeaders();
    const payload: Payload = await getPayload({ config: await configPromise });

    const { user } = await payload.auth({ headers });
    return user || null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

/**
 * Authenticate a user with email and password
 * @param params Login parameters including email, password and optional rememberMe flag
 * @returns Login response with success status and error message if applicable
 */
export async function loginUser({
  email,
  password,
  rememberMe = false,
}: LoginParams): Promise<LoginResponse> {
  try {
    const payload = await getPayload({ config });

    // Track login attempts (could be extended with rate limiting)
    try {
      const result: Result = await payload.login({
        collection: 'users',
        data: { email, password },
      });

      if (result.token) {
        const cookieStore = await cookies();

        // Calculate expiration date based on rememberMe flag
        const expiresIn = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000; // 30 days or 1 day in milliseconds
        const expiresDate = new Date(Date.now() + expiresIn);

        cookieStore.set('payload-token', result.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          path: '/',
          expires: expiresDate,
        });

        return { success: true };
      }

      return {
        success: false,
        error: 'Invalid email or password',
        errorCode: 'INVALID_CREDENTIALS',
      };
    } catch (error) {
      console.error('Login attempt failed:', error);

      // Provide more specific error messages based on error type
      if (error instanceof Error) {
        if (error.message.includes('credentials')) {
          return {
            success: false,
            error: 'The email or password you entered is incorrect',
            errorCode: 'INVALID_CREDENTIALS',
          };
        }
      }

      return {
        success: false,
        error: 'Authentication failed. Please try again later.',
        errorCode: 'AUTH_ERROR',
      };
    }
  } catch (error) {
    console.error('Login system error:', error);
    return {
      success: false,
      error: 'We encountered a system error. Please try again later.',
      errorCode: 'SYSTEM_ERROR',
    };
  }
}

/**
 * Log out the current user by removing their authentication token
 */
export async function logoutUser() {
  try {
    const cookieStore = await cookies();
    // Delete the auth cookie with proper options
    cookieStore.delete('payload-token');

    // Clear any other auth-related cookies if they exist
    cookieStore.delete('user-session');

    redirect('/');
  } catch (error) {
    console.error('Logout error:', error);
    redirect('/');
  }
}

/**
 * Register a new user with email and password
 * @param params Registration parameters including email and password
 * @returns Registration response with success status and error message if applicable
 */
export async function registerUser({ email, password }: RegisterParams): Promise<RegisterResponse> {
  try {
    const payload = await getPayload({ config });

    try {
      // Create the user
      await payload.create({
        collection: 'users',
        data: {
          email,
          password,
          role: 'user',
        },
      });

      // Log the user in
      const loginResponse = await loginUser({ email, password });

      if (loginResponse.success) {
        return { success: true };
      }

      return {
        success: false,
        error:
          'Account created but unable to log in automatically. Please try logging in manually.',
        errorCode: 'LOGIN_AFTER_REGISTER_FAILED',
      };
    } catch (error) {
      console.error('Registration attempt failed:', error);

      // Provide specific error messages based on error type
      if (error instanceof Error) {
        if (error.message.includes('duplicate key error')) {
          return {
            success: false,
            error:
              'An account with this email already exists. Please log in or use a different email.',
            errorCode: 'EMAIL_EXISTS',
          };
        }

        if (error.message.includes('validation')) {
          return {
            success: false,
            error: 'Please check your information and try again.',
            errorCode: 'VALIDATION_ERROR',
          };
        }
      }

      return {
        success: false,
        error: "We couldn't create your account. Please try again later.",
        errorCode: 'REGISTRATION_FAILED',
      };
    }
  } catch (error) {
    console.error('Registration system error:', error);
    return {
      success: false,
      error: 'We encountered a system error. Please try again later.',
      errorCode: 'SYSTEM_ERROR',
    };
  }
}
