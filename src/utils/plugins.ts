import { Plugin } from 'payload';

import { revalidateRedirects } from '@/utils/payload-hooks/revalidate-redirects';

import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { seoPlugin } from '@payloadcms/plugin-seo';

import type { Page } from '@/payload-types';
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    : process.env.NEXT_PUBLIC_SITE_NAME!;
};

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || '';
  if (doc?.slug) {
    return `${url}/${doc.slug}`;
  }
  return url;
};

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            };
          }
          return field;
        });
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  payloadCloudPlugin(),
];
