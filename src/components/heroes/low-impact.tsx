import React from 'react';

import { Container, Section } from '@/components/ds';
import { CMSLink } from '@/components/plugins/link';
import RichText from '@/components/plugins/rich-text';

import type { Page } from '@/payload-types';

type Props = Page['hero'];

function LowImpactHero({ richText, links }: Props) {
  return (
    <Section className="bg-accent/30 border-b">
      <Container className="space-y-3 sm:space-y-6">
        {richText && <RichText data={richText} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-2">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </Section>
  );
}

export { LowImpactHero };
export type { Props as LowImpactHeroProps };
