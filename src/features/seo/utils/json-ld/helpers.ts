import type { WithContext } from './types';

export const getSiteUrl = (path = '/'): string => {
  const base = process.env.NEXT_PUBLIC_URL ?? '';
  return `${base}${path}`;
};

export const jsonLdScriptProps = (data: WithContext<Record<string, unknown>>) => ({
  type: 'application/ld+json' as const,
  dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
});
