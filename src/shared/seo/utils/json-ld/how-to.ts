import type { WithContext, ImageObjectJsonLd, MonetaryAmountJsonLd } from './types';

export type HowToStepJsonLd = {
  '@type': 'HowToStep';
  name: string;
  text: string;
  url?: string;
  image?: ImageObjectJsonLd | string;
};

export type HowToJsonLd = WithContext<{
  '@type': 'HowTo';
  name: string;
  description?: string;
  image?: ImageObjectJsonLd | string;
  totalTime?: string;
  estimatedCost?: MonetaryAmountJsonLd;
  supply?: { '@type': 'HowToSupply'; name: string }[];
  tool?: { '@type': 'HowToTool'; name: string }[];
  step: HowToStepJsonLd[];
}>;

type BuildHowToOptions = {
  name: string;
  description?: string;
  imageUrl?: string;
  totalTime?: string;
  estimatedCost?: Omit<MonetaryAmountJsonLd, '@type'>;
  supply?: string[];
  tool?: string[];
  steps: { name: string; text: string; url?: string; imageUrl?: string }[];
};

export function buildHowToJsonLd(options: BuildHowToOptions): HowToJsonLd {
  const { name, description, imageUrl, totalTime, estimatedCost, supply, tool, steps } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    ...(description && { description }),
    ...(imageUrl && { image: { '@type': 'ImageObject', url: imageUrl } }),
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost: { '@type': 'MonetaryAmount', ...estimatedCost } }),
    ...(supply && { supply: supply.map((s) => ({ '@type': 'HowToSupply' as const, name: s })) }),
    ...(tool && { tool: tool.map((t) => ({ '@type': 'HowToTool' as const, name: t })) }),
    step: steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.name,
      text: s.text,
      ...(s.url && { url: s.url }),
      ...(s.imageUrl && { image: { '@type': 'ImageObject', url: s.imageUrl } }),
    })),
  };
}
