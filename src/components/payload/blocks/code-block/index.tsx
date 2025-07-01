'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { CopyButton } from '@/components/payload/blocks/code-block/copy-button';
import { Highlight, themes } from 'prism-react-renderer';

import type { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {
  code: string;
  language?: string;
}

function CodeBlock({ code, language, className, ...props }: Props) {
  if (!code) return null;
  return (
    <div className={cn('not-prose', className)} {...props}>
      <Highlight code={code} language={language || ''} theme={themes.vsDark}>
        {({ getLineProps, getTokenProps, tokens }) => (
          <pre className="overflow-x-auto rounded border border-border bg-black p-4 text-xs">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ className: 'table-row', line })}>
                <span className="table-cell text-right text-white/25 select-none">{i + 1}</span>
                <span className="table-cell pl-4">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
            <CopyButton code={code} />
          </pre>
        )}
      </Highlight>
    </div>
  );
}

export { CodeBlock };
export type { Props as CodeBlockProps };
