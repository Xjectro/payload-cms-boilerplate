export type ApiError = {
  status: number;
  message: string;
  code?: string;
  details?: unknown;
};

export async function handleApiError(error: unknown): Promise<ApiError> {
  if (error instanceof Response) {
    let message = 'Something went wrong';
    let code: string | undefined;
    let details: unknown;
    let errors: any;
    let title: string | undefined;
    let traceId: string | undefined;

    try {
      const data = await error.json();
      message = data?.message || data?.title || message;
      code = data?.code;
      details = data?.details || data;
      errors = data?.errors;
      title = data?.title;
      traceId = data?.traceId;
      if (errors && typeof errors === 'object') {
        const errorMessages = Object.entries(errors)
          .map(([field, msgs]) => `${field}: ${Array.isArray(msgs) ? msgs.join(', ') : msgs}`)
          .join(' | ');
        message += ` (${errorMessages})`;
      }
    } catch {}

    return {
      status: error.status,
      message,
      code,
      details,
      ...(errors ? { errors } : {}),
      ...(title ? { title } : {}),
      ...(traceId ? { traceId } : {}),
    };
  }

  // network / runtime error
  if (error instanceof Error) {
    return {
      status: 0,
      message: error.message,
    };
  }

  return {
    status: 0,
    message: 'Unknown error',
  };
}
