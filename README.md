# Payload CMS Boilerplate

> Modern, production-ready CMS starter built with **Payload CMS 3.84.1** and **Next.js 16**.

## Features

- **Modern UI/UX** — Tailwind CSS, Radix UI, shadcn/ui primitives
- **Responsive Design** — Mobile-first layout with header/footer components
- **Dark/Light Mode** — CSS variable-based theme system
- **Rich Text Editor** — Lexical-powered rich text with React renderer
- **Media Management** — Image & video field components with S3 / Vercel Blob storage adapters
- **SEO Module** — `buildMetadata`, `mergeOpenGraph`, JSON-LD generators, `robots.ts`, `sitemap.ts`
- **Official Payload Plugins** — SEO, Redirects, Live Preview, Payload Cloud
- **Forms** — react-hook-form + Zod validation
- **Vercel Analytics** — Built-in with zero config
- **GraphQL API** — Endpoint + Playground included
- **TypeScript** — Strict typing throughout

## Technologies

| Technology          | Version  | Description               |
| ------------------- | -------- | ------------------------- |
| **Next.js**         | 16.2.4   | React framework           |
| **Payload CMS**     | 3.84.1   | Headless CMS              |
| **Tailwind CSS**    | 3.4.17   | CSS framework             |
| **PostgreSQL**      | —        | Database (via pg adapter) |
| **TypeScript**      | 6.0.3    | Type safety               |
| **React**           | 19.2.5   | UI library                |
| **Zod**             | 4.x      | Schema validation         |
| **react-hook-form** | 7.x      | Form handling             |

## Quick Start

### 1. Clone the Project

```bash
git clone https://github.com/Xjectro/payload-cms-boilerplate.git
cd payload-cms-boilerplate
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup

Copy `.env.example` to `.env` and fill in the required variables:

```bash
cp .env.example .env
```

```env
# Database Configuration
DATABASE_URL=postgres://postgres:<password>@127.0.0.1:5432/payload_cms_boilerplate

# Application Secrets
PAYLOAD_SECRET=YOUR_SECRET_HERE

# Site
APP_URL=http://localhost:3000
APP_TITLE=Your Site Name

# Environment Variables for Next.js
NEXT_PUBLIC_URL=${APP_URL}
NEXT_PUBLIC_TITLE=${APP_TITLE}
```

### 4. Database Setup

```bash
# Run database migrations
npm run payload migrate
```

### 5. Seed the Database (optional)

```bash
npm run seed
```

### 6. Start the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Project Structure

```
payload-cms-boilerplate/
├── src/
│   ├── app/
│   │   ├── (payload)/
│   │   │   ├── admin/
│   │   │   │   ├── [[...segments]]/
│   │   │   │   │   ├── not-found.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── importMap.js
│   │   │   ├── api/
│   │   │   │   ├── [...slug]/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── graphql/
│   │   │   │   │   └── route.ts
│   │   │   │   └── graphql-playground/
│   │   │   │       └── route.ts
│   │   │   ├── custom.scss
│   │   │   └── layout.tsx
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── template.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── collections/
│   │   ├── Media/
│   │   │   └── index.ts
│   │   └── Users/
│   │       └── index.ts
│   ├── features/
│   │   └── example/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── utils/
│   ├── payload/
│   │   ├── components/
│   │   │   ├── fields/
│   │   │   │   └── media/
│   │   │   │       ├── image-media/
│   │   │   │       │   └── index.tsx
│   │   │   │       ├── video-media/
│   │   │   │       │   └── index.tsx
│   │   │   │       ├── index.tsx
│   │   │   │       └── types.ts
│   │   │   └── rich-text.tsx
│   │   ├── utils/
│   │   │   └── payload-hooks/
│   │   │       └── access.ts
│   │   ├── payload.config.ts
│   │   ├── payload-types.ts
│   │   └── seed.ts
│   ├── shared/
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── providers/
│   │   │   ├── client-provider.tsx
│   │   │   └── server-provider.tsx
│   │   ├── seo/
│   │   │   ├── components/
│   │   │   │   └── home-structured-data.tsx
│   │   │   ├── utils/
│   │   │   │   ├── json-ld/
│   │   │   │   │   ├── article.ts
│   │   │   │   │   ├── breadcrumb.ts
│   │   │   │   │   ├── event.ts
│   │   │   │   │   ├── faq.ts
│   │   │   │   │   ├── helpers.ts
│   │   │   │   │   ├── how-to.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   │   ├── item-list.ts
│   │   │   │   │   ├── local-business.ts
│   │   │   │   │   ├── organization.ts
│   │   │   │   │   ├── person.ts
│   │   │   │   │   ├── product.ts
│   │   │   │   │   ├── types.ts
│   │   │   │   │   ├── video.ts
│   │   │   │   │   ├── webpage.ts
│   │   │   │   │   └── website.ts
│   │   │   │   ├── metadata.ts
│   │   │   │   └── open-graph.ts
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── layout/
│   │       │   ├── header.tsx
│   │       │   └── footer.tsx
│   │       ├── primitives/
│   │       │   ├── alert.tsx
│   │       │   ├── badge.tsx
│   │       │   ├── button.tsx
│   │       │   ├── checkbox.tsx
│   │       │   ├── form.tsx
│   │       │   ├── input.tsx
│   │       │   └── label.tsx
│   │       └── react/
│   │           └── design-system.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── themes.css
│   └── css.d.ts
├── public/
│   ├── favicon.ico
│   └── opengraph-image.webp
├── .env.example
├── .prettierrc.json
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Available Commands

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Start development server         |
| `npm run build`          | Build for production             |
| `npm run start`          | Start production server          |
| `npm run lint`           | Check code quality               |
| `npm run format`         | Format code with Prettier        |
| `npm run seed`           | Seed the database                |
| `npm run payload`        | Payload CLI (migrate, generate…) |

## SEO Module

The SEO module lives in `src/shared/seo/` and is ready to use out of the box:

- **`buildMetadata`** — generates `Metadata` objects for Next.js pages
- **`mergeOpenGraph`** — merges Open Graph tags with site defaults
- **JSON-LD generators** — Article, BreadcrumbList, Event, FAQ, HowTo, ItemList, LocalBusiness, Organization, Person, Product, VideoObject, WebPage, WebSite
- **`HomeStructuredData`** — drop-in component for the home page
- **`robots.ts` / `sitemap.ts`** — auto-generated at build time

## Storage Adapters

Two storage adapters are pre-installed and can be activated in `payload.config.ts`:

- **AWS S3** — `@payloadcms/storage-s3`
- **Vercel Blob** — `@payloadcms/storage-vercel-blob`

## API Endpoints

| Endpoint                  | Description            |
| ------------------------- | ---------------------- |
| `/api/graphql`            | GraphQL API            |
| `/api/graphql-playground` | GraphQL Playground     |
| `/admin`                  | Payload Admin Panel    |

## Deployment

### Vercel

```bash
vercel deploy
```

Or connect the GitHub repository in the Vercel dashboard for automatic deploys on push.

Set all environment variables from `.env.example` in your Vercel project settings before deploying.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- Website: https://xjectro.com
- GitHub Issues: [Issues page](https://github.com/Xjectro/payload-cms-boilerplate/issues)
- Payload CMS Docs: [payloadcms.com/docs](https://payloadcms.com/docs)

## License

MIT — see the `LICENSE` file for details.

---

<div align="center">

Made with love by [Xjectro](https://github.com/Xjectro)

</div>
