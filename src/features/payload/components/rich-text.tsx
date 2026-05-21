import { cn } from '@/shared/lib/utils';

import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react';

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
