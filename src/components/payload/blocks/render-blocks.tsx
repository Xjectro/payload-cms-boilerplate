import { CallToActionBlock } from '@/components/payload/blocks/cta-block';
import { ContentBlock } from '@/components/payload/blocks/content-block';
import { MediaBlock } from '@/components/payload/blocks/media-block';
import { BannerBlock } from '@/components/payload/blocks/banner-block';

import type {
  Page,
  ContentBlock as ContentBlockType,
  CallToActionBlock as CTABlockType,
  MediaBlock as MediaBlockType,
  BannerBlock as BannerBlockType,
} from '@/payload-types';

function RenderBlocks({ blocks }: { blocks: Page['layout'][0][] }) {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
  if (!hasBlocks) return null;

  return blocks.map((block, index) => {
    const key = block.id ? String(block.id) : `block-${index}`;

    switch (block.blockType) {
      case 'content-block':
        return <ContentBlock key={key} {...(block as ContentBlockType)} />;
      case 'cta-block':
        return <CallToActionBlock key={key} {...(block as CTABlockType)} />;
      case 'media-block':
        return <MediaBlock key={key} {...(block as MediaBlockType)} />;
      case 'banner-block': {
        const { id, ...bannerProps } = block as BannerBlockType;
        return <BannerBlock key={key} {...bannerProps} id={id || undefined} />;
      }
      default:
        return null;
    }
  });
}

export { RenderBlocks };
