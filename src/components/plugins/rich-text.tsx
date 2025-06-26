import { cn } from '@/lib/utils';

import {
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical';
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react';

import { BannerBlock } from '@/components/blocks/banner-block';
import { CallToActionBlock } from '@/components/blocks/cta-block';
import { MediaBlock } from '@/components/blocks/media-block';
import { CodeBlock } from '@/components/blocks/code-block';
import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
  CodeBlock as CodeBlockProps,
} from '@/payload-types';

type NodeTypes = SerializedBlockNode<
  CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps
>;

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!;
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object');
  }
  const slug = value.slug;
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`;
};

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    'banner-block': ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    'media-block': ({ node }) => <MediaBlock imgClassName="m-0" {...node.fields} />,
    'code-block': ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    'cta-block': ({ node }) => <CallToActionBlock {...node.fields} />,
  },
});

type Props = {
  data: DefaultTypedEditorState;
  enableGutter?: boolean;
  enableProse?: boolean;
  enableSpacing?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function RichText({
  className,
  enableProse = true,
  enableGutter = false,
  enableSpacing = true,
  ...rest
}: Props) {
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          'max-w-prose': enableGutter,
          'space-y-4': enableSpacing,
          ds: enableProse,
        },
        className,
      )}
      {...rest}
    />
  );
}
