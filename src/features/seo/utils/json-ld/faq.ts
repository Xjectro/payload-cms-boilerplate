import type { WithContext } from './types';

export type FAQPageJsonLd = WithContext<{
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}>;

export type FAQItem = {
  question: string;
  answer: string;
};

export function buildFAQPageJsonLd(items: FAQItem[]): FAQPageJsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
