import { Section, Container, Prose } from '@/components/ds';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

import Link from 'next/link';

export default async function Index() {
  return <ToDelete />;
}

const ToDelete = () => {
  const FeatureCategory = ({ title, features }: { title: string; features: string[] }) => {
    return (
      <div>
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Section className="border-b">
        <Container>
          <Prose isSpaced>
            <h1>Payload CMS Boilerplate</h1>
            <h4>A modern, open-source SaaS starter kit built with Next.js 15 and Payload CMS</h4>
          </Prose>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="https://github.com/Xjectro/payload-cms-boilerplate">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div>
            <h2 className="sr-only">What&apos;s Included</h2>
            <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
              <FeatureCategory
                title="Authentication System"
                features={[
                  'Secure user authentication with HTTP-only cookies',
                  'Email/password registration and login',
                  'Role-based access control (admin/user)',
                  'Password strength validation',
                  'Remember me functionality',
                  'Protected routes with middleware',
                  'JWT-based authentication',
                ]}
              />
              <FeatureCategory
                title="Modern Tech Stack"
                features={[
                  'Next.js 15 with App Router',
                  'Payload CMS for content management',
                  'TypeScript for type safety',
                  'Vercel Blob or Cloudflare R2 for file storage',
                  'PostgreSQL database with Payload adapter',
                  'Tailwind CSS for styling',
                  'shadcn/ui components',
                  'craft-ds for design system',
                  'Dark/light mode with theme persistence',
                ]}
              />
              <FeatureCategory
                title="Developer Experience"
                features={[
                  'Clean project structure',
                  'Server components and actions',
                  'Reusable design system components',
                  'Type-safe APIs',
                  'Vercel deployment ready',
                ]}
              />
              <FeatureCategory
                title="Ready-to-Use Features"
                features={[
                  'User dashboard',
                  'Account management',
                  'Responsive layouts',
                  'SEO optimized',
                  'Accessibility focused',
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section className="border-t">
        <Container>
          <p className="text-muted-foreground">
            Created by{' '}
            <a
              href="https://bridger.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Bridger Tower
            </a>
            . Follow on{' '}
            <a
              href="https://bridger.to/x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              X for updates
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
};
