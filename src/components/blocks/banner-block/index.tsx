import React from 'react';

import { cn } from '@/lib/utils';
import { Section, Container } from '@/components/ds';
import RichText from '@/components/plugins/rich-text';

import type { ComponentProps } from 'react';
import type { BannerBlock as BannerBlockProps } from '@/payload-types';

type Props = BannerBlockProps & ComponentProps<typeof Section>;

function BannerBlock({ content, style, ...props }: Props) {
  return (
    <Section {...props}>
      <Container>
        <div
          className={cn('flex items-center rounded border px-6 py-3', {
            'border-border bg-card': style === 'info',
            'border-error bg-error/30': style === 'error',
            'border-success bg-success/30': style === 'success',
            'border-warning bg-warning/30': style === 'warning',
          })}
        >
          <RichText data={content} enableGutter={false} enableProse={false} />
        </div>
      </Container>
    </Section>
  );
}

export { BannerBlock };
export type { Props as BannerBlockProps };
