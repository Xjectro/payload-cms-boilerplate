# 🚀 Payload CMS Boilerplate

> **Modern, powerful and super fun CMS experience!** 🎉

Hello world! 👋 This is a super powerful boilerplate built with **Payload CMS 3.84.1** and **Next.js 16**! Everything is ready to get started right away! ✨

## 🌟 Features

- 🎨 **Modern UI/UX** - Beautiful design with Tailwind CSS and Radix UI
- 📱 **Responsive Design** - Mobile, tablet and desktop compatible
- 🌙 **Dark/Light Mode** - Theme switcher for night/day mode
- 📝 **Rich Text Editor** - Powerful text editor with Lexical
- 🖼️ **Media Management** - File upload and image management
- 🔍 **SEO Optimized** - Structured data, Open Graph, and JSON-LD support
- 🌐 **GraphQL API** - Modern API structure
- 🐳 **Docker Ready** - Easy to deploy

## 🛠️ Technologies

| Technology          | Version | Description     |
| ------------------- | ------- | --------------- |
| 🚀 **Next.js**      | 16.2.4  | React framework |
| 📦 **Payload CMS**  | 3.84.1  | Headless CMS    |
| 🎨 **Tailwind CSS** | 3.4.17  | CSS framework   |
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
npm install
# or
npm install
# or
yarn install
```

### 3. ⚙️ Environment Setup

Create a `.env.local` file and add the required variables:

```env
# Database Configuration
DATABASE_URL=postgres://postgres:password@127.0.0.1:5432/your-db

# Application Secrets
PAYLOAD_SECRET=YOUR_SECRET_HERE

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
npm payload migrate
```

### 5. 🌱 Seed the Database (optional)

```bash
npm seed
```

### 6. 🎉 Start the Project

```bash
npm dev
```

Go to `http://localhost:3000` in your browser! 🎯

## 📁 Project Structure

```
📦 payload-cms-boilerplate
├── 🎨 src/
│   ├── 📄 app/                          # Next.js App Router
│   │   ├── (payload)/                   # Payload CMS admin & API
│   │   │   ├── layout.tsx               # Admin layout
│   │   │   ├── custom.scss              # Admin custom styles
│   │   │   ├── admin/                   # Admin panel
│   │   │   │   ├── importMap.js         # Import map
│   │   │   │   └── [[...segments]]/
│   │   │   │       ├── not-found.tsx
│   │   │   │       └── page.tsx
│   │   │   └── api/                     # Payload API routes
│   │   │       ├── [...slug]/           # Dynamic API
│   │   │       ├── graphql/             # GraphQL endpoint
│   │   │       └── graphql-playground/
│   │   └── (public)/                    # Public-facing pages
│   │       ├── layout.tsx               # Public layout
│   │       ├── page.tsx                 # Home page
│   │       └── template.tsx             # Public template
│   ├── 🗂️ collections/                 # Payload collections
│   │   ├── Media/                       # Media collection
│   │   │   └── index.ts
│   │   └── Users/                       # Users collection
│   │       └── index.ts
│   ├── 🧩 features/                     # Feature modules
│   │   ├── common/                      # Shared UI components
│   │   │   └── components/
│   │   │       ├── header.tsx           # Header
│   │   │       └── footer.tsx           # Footer
│   │   ├── payload/                     # Payload-related components & utils
│   │   │   ├── components/
│   │   │   │   ├── rich-text.tsx        # Rich text renderer
│   │   │   │   └── fields/              # Custom field UI
│   │   │   │       └── media/           # Media field (image & video)
│   │   │   └── utils/
│   │   │       └── payload-hooks/       # Payload hooks
│   │   │           └── access.ts
│   │   └── seo/                         # SEO feature module
│   │       ├── components/
│   │       │   └── home-structured-data.tsx
│   │       ├── utils/
│   │       │   ├── json-ld/             # Structured data generators
│   │       │   │   ├── article.ts
│   │       │   │   ├── breadcrumb.ts
│   │       │   │   ├── event.ts
│   │       │   │   ├── faq.ts
│   │       │   │   ├── helpers.ts
│   │       │   │   ├── how-to.ts
│   │       │   │   ├── item-list.ts
│   │       │   │   ├── local-business.ts
│   │       │   │   ├── organization.ts
│   │       │   │   ├── person.ts
│   │       │   │   ├── product.ts
│   │       │   │   ├── video.ts
│   │       │   │   ├── webpage.ts
│   │       │   │   └── website.ts
│   │       │   └── open-graph.ts
│   │       └── index.ts
│   ├── 🧰 shared/                       # Shared utilities & design system
│   │   ├── lib/
│   │   │   └── utils.ts                 # General helpers
│   │   ├── providers/
│   │   │   ├── client-provider.tsx      # Client-side providers
│   │   │   └── server-provider.tsx      # Server-side providers
│   │   └── ui/
│   │       ├── primitives/              # Base UI primitives (shadcn/ui)
│   │       │   ├── alert.tsx
│   │       │   ├── badge.tsx
│   │       │   ├── button.tsx
│   │       │   ├── checkbox.tsx
│   │       │   ├── form.tsx
│   │       │   ├── input.tsx
│   │       │   └── label.tsx
│   │       └── react/
│   │           └── design-system.tsx    # Design system entry
│   ├── 🎨 styles/                       # Global styles
│   │   ├── globals.css                  # Global CSS
│   │   └── themes.css                   # Theme variables
│   ├── css.d.ts                         # CSS module type declarations
│   ├── payload-types.ts                 # Generated Payload types
│   ├── payload.config.ts                # Payload configuration
│   └── seed.ts                          # Database seeder
├── 🖼️ public/                           # Static assets
└── ⚙️ Config Files
    ├── components.json                  # shadcn/ui config
    ├── eslint.config.mjs                # ESLint configuration
    ├── next.config.ts                   # Next.js configuration
    ├── next-env.d.ts                    # Next.js type declarations
    ├── package.json                     # Dependencies & scripts
    └── tsconfig.json                    # TypeScript settings
```

## 🎮 Available Commands

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm dev`        | 🚀 Start development server |
| `npm build`      | 📦 Build for production     |
| `npm start`      | ▶️ Start production server  |
| `npm lint`       | 🔍 Check code quality       |
| `npm format`     | ✨ Format code              |
| `npm seed`       | 🌱 Seed the database        |
| `npm payload`    | ⚡ Payload CLI commands     |

## 🔍 SEO

This boilerplate ships with a fully-featured SEO module out of the box:

- 📊 **Structured Data (JSON-LD)** - Article, Product, FAQ, Event, Person, Organization, BreadcrumbList, HowTo, VideoObject, ItemList, LocalBusiness, WebPage, WebSite
- 🖼️ **Open Graph** - Social media preview metadata
- 🏠 **Home Structured Data** - Pre-wired component for the home page

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
