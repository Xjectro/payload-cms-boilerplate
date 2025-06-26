'use client';

import React from 'react';

import { cn } from '@/lib/utils';
import { CopyButton } from './copy-button';
import { Highlight, themes } from 'prism-react-renderer';

import type { ComponentProps } from 'react';
import type { CodeBlock as CodeBlockProps } from '@/payload-types';

type Props = CodeBlockProps & ComponentProps<'div'>;

function CodeBlock({ code, language, className, ...props }: Props) {
  if (!code) return null;
  return (
    <div className={cn('not-prose', className)} {...props}>
      <Highlight code={code} language={language || ''} theme={themes.vsDark}>
        {({ getLineProps, getTokenProps, tokens }) => (
          <pre className="bg-black p-4 border text-xs border-border rounded overflow-x-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ className: 'table-row', line })}>
                <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
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
