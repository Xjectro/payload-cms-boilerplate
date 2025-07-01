import { mergeOpenGraph } from '@/utils/meta/open-graph';

import type { Metadata } from 'next';
import type { Page } from '@/payload-types';

export const generateMeta = async (args: { doc: Partial<Page> | null }): Promise<Metadata> => {
  const { doc } = args;

  const title = doc?.meta?.title
    ? `${doc?.meta?.title} · ${process.env.NEXT_PUBLIC_SITE_NAME}`
    : process.env.NEXT_PUBLIC_SITE_NAME;

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title,
  };
};
