'use server';

import { handleApiError } from './error-handler';
import { requestInterceptor, responseInterceptor } from './interceptors';

const BASE_URL = process.env.API_URL;

function resolveUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  if (!BASE_URL) {
    throw new Error('API_URL is not set');
  }

  return `${BASE_URL}/v1${url}`;
}

async function parseResponse<T>(response: Response): Promise<T> {
  if (response.status === 204 || response.status === 205) {
    return undefined as T;
  }

  const text = await response.text();
  if (!text) {
    return undefined as T;
  }

  const contentType = response.headers.get('content-type') ?? '';
  const looksJson = contentType.includes('application/json') || /^[\s]*[\[{]/.test(text);

  if (!looksJson) {
    return text as unknown as T;
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error('Invalid JSON response');
  }
}

async function http<T>(url: string, options: RequestInit = {}): Promise<T> {
  const method = (options.method ?? 'GET').toUpperCase();
  const startedAt = Date.now();
  const fullUrl = resolveUrl(url);

  try {
    const [input, init] = await requestInterceptor(fullUrl, options);
    const response = await fetch(input, init);
    const interceptedResponse = await responseInterceptor(response);

    return await parseResponse<T>(interceptedResponse);
  } catch (error) {
    const durationMs = Date.now() - startedAt;

    if (error instanceof Response) {
      console.warn('HTTP request failed', {
        url,
        fullUrl,
        method,
        status: error.status,
        durationMs,
      });
    } else if (error instanceof Error) {
      console.error('HTTP request error', {
        url,
        fullUrl,
        method,
        name: error.name,
        message: error.message,
        durationMs,
      });
    } else {
      console.error('HTTP request unknown error', {
        url,
        fullUrl,
        method,
        error: String(error),
        durationMs,
      });
    }

    throw await handleApiError(error);
  }
}

export const getReq = async <T>(url: string, options?: RequestInit) =>
  http<T>(url, { ...options, method: 'GET' });

export const postReq = async <T>(url: string, body?: unknown, options?: RequestInit) =>
  http<T>(url, {
    ...options,
    method: 'POST',
    body: body as BodyInit | null | undefined,
  });

export const putReq = async <T>(url: string, body?: unknown, options?: RequestInit) => {
  return http<T>(url, {
    ...options,
    method: 'PUT',
    body: body as BodyInit | null | undefined,
  });
};

export const patchReq = async <T>(url: string, body?: unknown, options?: RequestInit) =>
  http<T>(url, {
    ...options,
    method: 'PATCH',
    body: body as BodyInit | null | undefined,
  });

export const deleteReq = async <T>(url: string, options?: RequestInit) =>
  http<T>(url, { ...options, method: 'DELETE' });
