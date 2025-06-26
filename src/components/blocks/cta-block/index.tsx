import React from 'react';

import RichText from '@/components/plugins/rich-text';
import { CMSLink } from '@/components/plugins/link';
import { Container, Section } from '@/components/ds';

import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

type Props = CTABlockProps;

function CallToActionBlock({ links, richText }: Props) {
  return (
    <Section>
      <Container className="bg-card rounded border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </Container>
    </Section>
  );
}

export { CallToActionBlock };
export type { Props as CallToActionBlockProps };
