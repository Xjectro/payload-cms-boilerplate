# 🚀 Payload CMS Boilerplate

> **Modern, powerful and super fun CMS experience!** 🎉

Hello world! 👋 This is a super powerful boilerplate built with **Payload CMS 3.83.0** and **Next.js 16**! Everything is ready to get started right away! ✨

## 🌟 Features

- 🎨 **Modern UI/UX** - Beautiful design with Tailwind CSS and Radix UI
- 🔐 **Secure Authentication** - Login/Register system ready
- 📱 **Responsive Design** - Mobile, tablet and desktop compatible
- 🌙 **Dark/Light Mode** - Theme switcher for night/day mode
- 📝 **Rich Text Editor** - Powerful text editor with Lexical
- 🖼️ **Media Management** - File upload and image management
- 🔍 **SEO Optimized** - Optimized for search engines
- 🌐 **GraphQL API** - Modern API structure
- 🐳 **Docker Ready** - Easy to deploy
- ⚡ **Live Preview** - Real-time preview

## 🛠️ Technologies

| Technology          | Version | Description     |
| ------------------- | ------- | --------------- |
| 🚀 **Next.js**      | 16.2.4  | React framework |
| 📦 **Payload CMS**  | 3.83.0  | Headless CMS    |
| 🎨 **Tailwind CSS** | 4.2.2   | CSS framework   |
| 🗄️ **PostgreSQL**   | -       | Database        |
| 🔧 **TypeScript**   | 6.0.3   | Type safety     |
| 🎭 **React**        | 19.2.5  | UI library      |

## 🏁 Quick Start

### 1. 📥 Clone the Project

```bash
git clone https://github.com/Xjectro/payload-cms-boilerplate.git
cd payload-cms-boilerplate
```

### 2. 📦 Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. ⚙️ Environment Setup

Create a `.env.local` file and add the required variables:

```env
# Database Configuration
DATABASE_URL=postgres://postgres:B100dy50.waf!@127.0.0.1:5432/this-is-my-test-db

# Application Secrets
PAYLOAD_SECRET=YOUR_SECRET_HERE
PREVIEW_SECRET=your_preview_secret_here

# Site
APP_URL=http://localhost:3000
APP_TITLE=Your Site Name

# Environment Variables for Next.js
NEXT_PUBLIC_URL=${APP_URL}
NEXT_PUBLIC_TITLE=${APP_TITLE}
```

### 4. 🗄️ Setup Database

```bash
# Start PostgreSQL (with Docker)
docker-compose up -d

# Migrate the database
pnpm payload migrate
```

### 5. 🎉 Start the Project

```bash
pnpm dev
```

Go to `http://localhost:3000` in your browser! 🎯

## 📁 Project Structure

```
📦 payload-cms-boilerplate
├── 🎨 src/
│   ├── 📄 app/                        # Next.js App Router
│   │   ├── (api)/                     # API routes
│   │   │   ├── health/                # Health check endpoint
│   │   │   │   └── route.ts
│   │   │   └── next/                  # Next.js integration
│   │   │       ├── exit-preview/      # Exit preview mode
│   │   │       │   └── route.ts
│   │   │       └── preview/           # Enter preview mode
│   │   │           └── route.ts
│   │   ├── (client)/                  # Client-side application
│   │   │   ├── layout.tsx             # Root client layout
│   │   │   ├── (auth)/                # Authentication pages
│   │   │   │   ├── template.tsx       # Auth template
│   │   │   │   ├── login/             # Login page
│   │   │   │   │   └── page.tsx
│   │   │   │   └── register/          # Register page
│   │   │   │       └── page.tsx
│   │   │   ├── (protected)/           # Authenticated-only area
│   │   │   │   ├── template.tsx       # Protected template
│   │   │   │   └── dashboard/         # Dashboard
│   │   │   │       └── page.tsx
│   │   │   └── (public)/              # Publicly accessible area
│   │   │       ├── template.tsx       # Public template
│   │   │       ├── page.tsx           # Home page
│   │   │       └── [slug]/            # Dynamic pages
│   │   │           └── page.tsx
│   │   └── (payload)/                 # Payload CMS admin
│   │       ├── layout.tsx             # Admin layout
│   │       ├── custom.scss            # Admin custom styles
│   │       ├── admin/                 # Admin panel
│   │       │   ├── importMap.js       # Import map
│   │       │   └── [[...segments]]/
│   │       │       ├── not-found.tsx
│   │       │       └── page.tsx
│   │       └── api/                   # Payload API routes
│   │           ├── [...slug]/         # Dynamic API
│   │           │   └── route.ts
│   │           ├── graphql/           # GraphQL endpoint
│   │           └── graphql-playground/
│   ├── 🗂️ collections/               # Payload collections
│   │   ├── Media/                     # Media collection
│   │   │   └── index.ts
│   │   ├── Pages/                     # Pages collection
│   │   │   ├── hooks.ts               # Page hooks
│   │   │   └── index.ts
│   │   └── Users/                     # Users collection
│   │       └── index.ts
│   ├── 🧩 features/                   # Feature modules
│   │   ├── auth/                      # Authentication feature
│   │   │   ├── components/
│   │   │   │   ├── buttons/           # Auth buttons (e.g. logout)
│   │   │   │   └── forms/             # Login & register forms
│   │   │   └── validations/           # Zod schemas
│   │   │       └── auth.ts
│   │   ├── common/                    # Shared UI components
│   │   │   └── components/
│   │   │       ├── footer.tsx         # Footer
│   │   │       └── header.tsx         # Header
│   │   └── payload/                   # Payload-related components & utils
│   │       ├── components/
│   │       │   ├── rich-text.tsx      # Rich text renderer
│   │       │   ├── blocks/            # Content blocks
│   │       │   │   ├── render-blocks.tsx
│   │       │   │   ├── banner-block/
│   │       │   │   ├── code-block/
│   │       │   │   ├── content-block/
│   │       │   │   ├── cta-block/
│   │       │   │   └── media-block/
│   │       │   ├── fields/            # Custom field UI
│   │       │   │   ├── link/
│   │       │   │   └── media/
│   │       │   ├── heroes/            # Hero components
│   │       │   │   ├── config.ts
│   │       │   │   ├── high-impact.tsx
│   │       │   │   ├── low-impact.tsx
│   │       │   │   ├── medium-impact.tsx
│   │       │   │   └── render-hero.tsx
│   │       │   └── plugins/           # Plugin components
│   │       └── utils/                 # Payload utilities
│   │           ├── plugins.ts         # Plugin configuration
│   │           ├── helpers/           # Helper functions
│   │           └── payload-hooks/     # Payload hooks
│   ├── 🔗 fields/                     # Payload custom field definitions
│   │   ├── link-group.ts
│   │   ├── link.ts
│   │   └── slug/
│   │       ├── format-slug.ts
│   │       ├── index.scss
│   │       ├── index.ts
│   │       └── slug-component.tsx
│   ├── 🧰 shared/                     # Shared utilities & design system
│   │   ├── lib/
│   │   │   ├── auth.ts                # Auth helpers
│   │   │   ├── utils.ts               # General helpers
│   │   │   └── seo/                   # SEO utilities
│   │   │       ├── generate-meta.ts
│   │   │       ├── index.ts
│   │   │       ├── json-ld.ts
│   │   │       └── open-graph.ts
│   │   ├── providers/
│   │   │   └── theme/
│   │   │       ├── theme-provider.tsx
│   │   │       └── theme-toggle.tsx
│   │   └── ui/                        # UI design system
│   │       ├── design-system.tsx
│   │       ├── forms/
│   │       │   ├── form-box.tsx
│   │       │   └── submit-button.tsx
│   │       └── primitives/            # Base UI primitives (shadcn/ui)
│   │           ├── alert.tsx
│   │           ├── badge.tsx
│   │           ├── button.tsx
│   │           ├── checkbox.tsx
│   │           ├── form.tsx
│   │           ├── input.tsx
│   │           └── label.tsx
│   ├── 🎨 styles/                     # Global styles
│   │   ├── globals.css                # Global CSS
│   │   └── themes.css                 # Theme variables
│   ├── css.d.ts                       # CSS module type declarations
│   ├── payload-types.ts               # Generated Payload types
│   ├── payload.config.ts              # Payload configuration
│   └── seed.ts                        # Database seeder
├── 🖼️ public/                         # Static assets
├── ⚙️ Config Files
│   ├── components.json                # shadcn/ui config
│   ├── eslint.config.mjs              # ESLint configuration
│   ├── next.config.ts                 # Next.js configuration
│   ├── next-env.d.ts                  # Next.js type declarations
│   ├── package.json                   # Dependencies & scripts
│   ├── postcss.config.ts              # PostCSS configuration
│   ├── tailwind.config.ts             # Tailwind configuration
│   └── tsconfig.json                  # TypeScript settings
```

## 🎮 Available Commands

| Command        | Description                 |
| -------------- | --------------------------- |
| `pnpm dev`     | 🚀 Start development server |
| `pnpm build`   | 📦 Build for production     |
| `pnpm start`   | ▶️ Start production server  |
| `pnpm lint`    | 🔍 Check code quality       |
| `pnpm format`  | ✨ Format code              |
| `pnpm payload` | ⚡ Payload CLI commands     |

## 🌈 Block Types

This boilerplate includes many pre-built block types:

- 🎯 **Banner Block** - Eye-catching banners
- 📝 **Content Block** - Rich content areas
- 🖼️ **Media Block** - Image/video blocks
- 💻 **Code Block** - Code display
- 🎪 **CTA Block** - Call-to-action buttons

## 🔐 Authentication

- ✅ User registration and login
- 🔒 Protected page redirects
- 👤 User profile management
- 🚪 Secure logout

## 🌐 API Endpoints

| Endpoint                  | Description            |
| ------------------------- | ---------------------- |
| `/api/graphql`            | 🔗 GraphQL API         |
| `/api/graphql-playground` | 🎮 GraphQL Playground  |
| `/admin`                  | 🔧 Payload Admin Panel |

## 🚀 Deployment

### Deploy to Vercel

```bash
# With Vercel CLI
vercel deploy

# or push to GitHub, auto deploy! 🎉
```

## 🤝 Contributing

1. 🍴 Fork it
2. 🌿 Create feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🎯 Create a Pull Request

## 📞 Support

Got any issues? 🤔

- 📧 Website: https://xjectro.com
- 💬 GitHub Issues: [Issues page](https://github.com/Xjectro/payload-cms-boilerplate/issues)
- 📖 Documentation: [Payload CMS Docs](https://payloadcms.com/docs)

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details! 📜

---

<div align="center">

**⭐ Don't forget to star if you liked it! ⭐**

Made with ❤️ by [Xjectro](https://github.com/Xjectro)

🚀 **Happy coding!** 🚀

</div>
