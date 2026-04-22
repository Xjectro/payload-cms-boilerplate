import React from 'react';

import { Container, Section } from '@/shared/ui/design-system';
import { CMSLink } from '@/features/payload/components/fields/link';
import RichText from '@/features/payload/components/rich-text';

import type { Page } from '@/payload-types';

type Props = Page['hero'];

function LowImpactHero({ richText, links }: Props) {
  return (
    <Section className="border-b bg-accent/30">
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
