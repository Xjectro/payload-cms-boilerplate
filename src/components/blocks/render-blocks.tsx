import { CallToActionBlock } from '@/components/blocks/cta-block';
import { ContentBlock } from '@/components/blocks/content-block';
import { MediaBlock } from '@/components/blocks/media-block';
import { BannerBlock } from '@/components/blocks/banner-block';

import type { Page } from '@/payload-types';

const blockComponents = {
  'content-block': ContentBlock,
  'cta-block': CallToActionBlock,
  'media-block': MediaBlock,
  'banner-block': BannerBlock,
};

function RenderBlocks({ blocks }: { blocks: Page['layout'][0][] }) {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
  if (!hasBlocks) return null;

  return blocks.map((block, index) => {
    const { blockType } = block;

    if (blockType && blockType in blockComponents) {
      const Block = blockComponents[blockType];

      if (Block) {
        // @ts-ignore
        return <Block key={index} index={index} {...block} disableInnerContainer />;
      }
    }
    return null;
  });
}

export { RenderBlocks };
