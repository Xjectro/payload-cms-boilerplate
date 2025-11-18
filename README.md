# 🚀 Payload CMS Boilerplate

> **Modern, powerful and super fun CMS experience!** 🎉

Hello world! 👋 This is a super powerful boilerplate built with **Payload CMS 3.64.0** and **Next.js 15**! Everything is ready to get started right away! ✨

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
| ------------------- | ------- | --------------- | ---------------------------------------------------------------------------- |
| 🚀 **Next.js**      | 16.0.3  | React framework | // But we are use next.js 15 because payload cms not give next.js 16 version |
| 📦 **Payload CMS**  | 3.43.0  | Headless CMS    |
| 🎨 **Tailwind CSS** | 4.1.10  | CSS framework   |
| 🗄️ **PostgreSQL**   | -       | Database        |
| 🔧 **TypeScript**   | 5.7.3   | Type safety     |
| 🎭 **React**        | 19.1.0  | UI library      |

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
NEXT_PUBLIC_APP_URL=${APP_URL}
NEXT_PUBLIC_APP_TITLE=${APP_TITLE}
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
│   ├── 📄 app/                     # Next.js App Router
│   │   ├── (api)/                 # API routes
│   │   │   ├── health/            # Health check
│   │   │   │   └── route.ts       # Health endpoint
│   │   │   └── next/              # Next.js integration
│   │   │       ├── exit-preview/  # Preview exit
│   │   │       │   └── route.ts
│   │   │       └── preview/       # Preview mode
│   │   │           └── route.ts
│   │   ├── (frontend)/            # Frontend application
│   │   │   ├── layout.tsx         # Frontend main layout
│   │   │   ├── (auth)/            # Authentication pages
│   │   │   │   ├── layout.tsx     # Auth layout
│   │   │   │   ├── login/         # Login page
│   │   │   │   │   └── page.tsx
│   │   │   │   └── register/      # Register page
│   │   │   │       └── page.tsx
│   │   │   ├── (protected)/       # Protected area
│   │   │   │   ├── layout.tsx     # Protected layout
│   │   │   │   └── dashboard/     # Dashboard page
│   │   │   │       └── page.tsx
│   │   │   └── (public)/          # Public area
│   │   │       ├── layout.tsx     # Public layout
│   │   │       ├── page.tsx       # Home page
│   │   │       └── [slug]/        # Dynamic pages
│   │   │           └── page.tsx   # Slug page
│   │   └── (payload)/             # Payload admin
│   │       ├── layout.tsx         # Payload layout
│   │       ├── custom.scss        # Admin custom styles
│   │       ├── admin/             # Admin panel
│   │       │   ├── importMap.js   # Import map
│   │       │   └── [[...segments]]/
│   │       │       ├── not-found.tsx
│   │       │       └── page.tsx
│   │       └── api/               # Payload API routes
│   │           ├── [...slug]/     # Dynamic API
│   │           │   └── route.ts
│   │           ├── graphql/       # GraphQL endpoint
│   │           └── graphql-playground/
│   ├── 🗂️ collections/            # Payload collections
│   │   ├── Media/                 # Media collection
│   │   │   └── index.ts
│   │   ├── Pages/                 # Pages collection
│   │   │   ├── hooks.ts           # Page hooks
│   │   │   └── index.ts
│   │   └── Users/                 # Users collection
│   │       └── index.ts
│   ├── 🧩 components/             # React components
│   │   ├── common/                # Common components
│   │   │   ├── footer.tsx         # Footer
│   │   │   └── header.tsx         # Header
│   │   ├── features/              # Feature components
│   │   │   └── auth/              # Authentication components
│   │   │       ├── buttons/       # Auth buttons
│   │   │       └── forms/         # Auth forms
│   │   ├── payload/               # Payload components
│   │   │   ├── rich-text.tsx      # Rich text renderer
│   │   │   ├── blocks/            # Content blocks
│   │   │   │   ├── render-blocks.tsx # Block renderer
│   │   │   │   ├── banner-block/  # Banner block
│   │   │   │   ├── code-block/    # Code block
│   │   │   │   ├── content-block/ # Content block
│   │   │   │   ├── cta-block/     # CTA block
│   │   │   │   └── media-block/   # Media block
│   │   │   ├── fields/            # Custom field components
│   │   │   │   ├── link/          # Link field
│   │   │   │   └── media/         # Media field
│   │   │   ├── heroes/            # Hero components
│   │   │   │   ├── config.ts      # Hero configuration
│   │   │   │   ├── high-impact.tsx # High impact hero
│   │   │   │   ├── low-impact.tsx # Low impact hero
│   │   │   │   ├── medium-impact.tsx # Medium impact hero
│   │   │   │   └── render-hero.tsx # Hero renderer
│   │   │   └── plugins/           # Plugin components
│   │   │       └── live-preview-listener.tsx
│   │   ├── providers/             # Provider components
│   │   │   └── theme/             # Theme components
│   │   │       ├── theme-provider.tsx # Theme provider
│   │   │       └── theme-toggle.tsx # Theme switcher
│   │   └── ui/                    # UI components
│   │       ├── design-system.tsx  # Design system
│   │       ├── forms/             # Form components
│   │       │   ├── form-box.tsx   # Form box
│   │       │   └── submit-button.tsx # Submit button
│   │       └── primitives/        # UI primitives
│   │           ├── alert.tsx      # Alert component
│   │           ├── badge.tsx      # Badge component
│   │           ├── button.tsx     # Button component
│   │           ├── checkbox.tsx   # Checkbox component
│   │           ├── form.tsx       # Form component
│   │           ├── input.tsx      # Input component
│   │           └── label.tsx      # Label component
│   ├── 🔗 fields/                 # Payload field types
│   │   ├── link-group.ts          # Link group field
│   │   ├── link.ts                # Link field
│   │   └── slug/                  # Slug field
│   │       ├── format-slug.ts     # Slug format
│   │       ├── index.scss         # Slug styles
│   │       ├── index.ts           # Slug field
│   │       └── slug-component.tsx # Slug component
│   ├── 🔧 lib/                    # Helper libraries
│   │   ├── auth.ts                # Authentication
│   │   └── utils.ts               # General helpers
│   ├── 🔄 migrations/             # Database migrations
│   ├── 🎨 styles/                 # Global styles
│   │   └── globals.css            # Global CSS
│   ├── 🛠️ utils/                  # Utility functions
│   │   ├── plugins.ts             # Plugin configuration
│   │   ├── helpers/               # Helper functions
│   │   │   └── generate-preview-path.ts
│   │   ├── meta/                  # Meta data
│   │   │   ├── generate-meta.ts   # Meta generator
│   │   │   └── open-graph.ts      # OpenGraph utilities
│   │   ├── payload-hooks/         # Payload hooks
│   │   │   ├── access.ts          # Access controls
│   │   │   └── revalidate-redirects.ts
│   │   └── validations/           # Validation schemas
│   │       └── auth.ts            # Auth validations
│   ├── payload-types.ts           # Payload type definitions
│   └── payload.config.ts          # Payload configuration
├── 🖼️ public/                     # Static files
│   ├── favicon.ico                # Site icon
│   ├── opengraph-image.webp       # OpenGraph image
│   └── media/                     # Media files
├── ⚙️ Config Files
│   ├── .env                       # Environment variables
│   ├── .prettierrc.json           # Prettier settings
│   ├── components.json            # Shadcn/ui config
│   ├── docker-compose.yml         # Docker Compose
│   ├── Dockerfile                 # Docker build
│   ├── eslint.config.mjs          # ESLint settings
│   ├── next.config.mjs            # Next.js configuration
│   ├── package.json               # Project dependencies
│   ├── tailwind.config.ts         # Tailwind configuration
│   └── tsconfig.json              # TypeScript settings
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

## 🐳 Running with Docker

```bash
# Start all services
docker-compose up -d

# Start only the database
docker-compose up -d postgres
```

## 🚀 Deployment

### Deploy to Vercel

```bash
# With Vercel CLI
vercel deploy

# or push to GitHub, auto deploy! 🎉
```

### Deploy with Docker

```bash
# Build image
docker build -t payload-cms-app .

# Run
docker run -p 3000:3000 payload-cms-app
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
