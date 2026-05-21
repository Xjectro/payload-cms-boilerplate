import '@/styles/globals.css';

import { Geist as FontSans } from 'next/font/google';

import { cn } from '@/shared/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
});

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.className} suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col', fontSans.className)}>{children}</body>
    </html>
  );
}
