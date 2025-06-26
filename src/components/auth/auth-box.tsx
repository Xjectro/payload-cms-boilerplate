import Link from 'next/link';

export function AuthBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="p-6 border rounded-md [&>h1]:font-medium [&>h1]:text-xl [&>h1]:underline">
        {children}
      </div>
      <Link className="text-sm text-muted-foreground" href="/">
        &larr; Back to home
      </Link>
    </div>
  );
}
