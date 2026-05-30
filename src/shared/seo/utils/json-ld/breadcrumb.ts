import { getSiteUrl } from './helpers';
import type { WithContext } from './types';

export type BreadcrumbListJsonLd = WithContext<{
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }[];
}>;

export type BreadcrumbItem = {
  name: string;
  url?: string;
};

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): BreadcrumbListJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: getSiteUrl(item.url) }),
    })),
  };
}
