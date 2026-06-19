import { getAccessToken } from '@/services/auth/token.service';

export type RequestInterceptor = (
  input: RequestInfo,
  init?: RequestInit,
) => Promise<[RequestInfo, RequestInit]>;

export type ResponseInterceptor = (response: Response) => Promise<Response>;

export const requestInterceptor: RequestInterceptor = async (input, init = {}) => {
  const token = await getAccessToken();

  const headers = new Headers(init.headers);
  let body = init.body;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  if (body instanceof FormData) {
    headers.delete('Content-Type');
  } else if (typeof body === 'object' && body !== null) {
    headers.set('Content-Type', 'application/json');
    body = JSON.stringify(body);
  } else if (typeof body === 'string') {
    headers.set('Content-Type', 'application/json');
  }

  return [
    input,
    {
      ...init,
      body,
      headers,
      credentials: init.credentials ?? 'include',
    },
  ];
};

export const responseInterceptor: ResponseInterceptor = async (response) => {
  /**
   *   if (response.status === 401) {
      await clearAccessToken();
      redirect('/login');
    }
   */

  if (!response.ok) {
    throw response;
  }

  return response;
};
