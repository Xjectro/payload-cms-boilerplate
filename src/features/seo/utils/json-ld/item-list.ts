import { getSiteUrl } from './helpers';
import type { WithContext } from './types';

export type ItemListJsonLd = WithContext<{
  '@type': 'ItemList';
  name?: string;
  description?: string;
  url?: string;
  numberOfItems?: number;
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name?: string;
    url?: string;
    item?: Record<string, unknown>;
  }[];
}>;

export type ItemListEntry = {
  name?: string;
  url?: string;
  item?: Record<string, unknown>;
};

type BuildItemListOptions = {
  name?: string;
  description?: string;
  slug?: string;
  items: ItemListEntry[];
};

export function buildItemListJsonLd(options: BuildItemListOptions): ItemListJsonLd {
  const { name, description, slug, items } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(name && { name }),
    ...(description && { description }),
    ...(slug && { url: getSiteUrl(`/${slug}`) }),
    numberOfItems: items.length,
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      ...(entry.name && { name: entry.name }),
      ...(entry.url && { url: getSiteUrl(entry.url) }),
      ...(entry.item && { item: entry.item }),
    })),
  };
}
