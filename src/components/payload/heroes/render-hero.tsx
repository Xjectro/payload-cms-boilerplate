import React from 'react';

import type { Page } from '@/payload-types';

import { HighImpactHero } from '@/components/payload/heroes/high-impact';
import { LowImpactHero } from '@/components/payload/heroes/low-impact';
import { MediumImpactHero } from '@/components/payload/heroes/medium-impact';

const heroes = {
  'high-impact': HighImpactHero,
  'low-impact': LowImpactHero,
  'medium-impact': MediumImpactHero,
};

type Props = Page['hero'];

function RenderHero(props: Props) {
  const { type } = props;

  if (!type || type === 'none') return null;

  const HeroToRender = heroes[type];

  if (!HeroToRender) return null;

  return <HeroToRender {...props} />;
}

export { RenderHero };
export type { Props as RenderHeroProps };
