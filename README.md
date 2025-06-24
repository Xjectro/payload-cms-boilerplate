# Payload SaaS Starter

A modern, open-source SaaS starter kit built with Next.js 15 and Payload CMS, designed to accelerate your SaaS development.

![Payload SaaS Starter](https://payload-saas-starter.vercel.app/opengraph-image.jpg)


## Demo

[payload-saas-starter.vercel.app](https://payload-saas-starter.vercel.app)

## Features

- **Authentication System**

  - Secure user authentication with HTTP-only cookies
  - Email/password registration and login
  - Role-based access control (admin/user)
  - Password strength validation
  - "Remember me" functionality
  - Protected routes with middleware

- **Modern Tech Stack**

  - Next.js 15 with App Router
  - Payload CMS for content management
  - TypeScript for type safety
  - PostgreSQL database with Payload adapter
  - Tailwind CSS for styling
  - Shadcn UI components
  - Dark/light mode with theme persistence

- **Developer Experience**
  - Clean project structure
  - Server components and actions
  - Reusable design system components
  - Type-safe APIs
  - Vercel deployment ready

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Xjectro/payload-cms-boilerplate.git
   cd payload-saas-starter
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your database credentials and other settings.

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Visit `http://localhost:3000` to see your application.

## Project Structure

```
/src
  /app                 # Next.js App Router
    /(frontend)        # Frontend routes
      /(admin)         # Protected admin routes
      /(auth)          # Authentication routes
      /(site)          # Public site routes
    /(payload)         # Payload CMS routes
  /collections         # Payload collections
  /components          # React components
    /auth              # Authentication components
    /ds                # Design system components
    /site              # Site components
    /theme             # Theme components
    /ui                # UI components
  /lib                 # Utility functions
  /public              # Static assets
```

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Payload CMS](https://payloadcms.com)
- [Next.js](https://nextjs.org)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

Created by [Xjectro](https://github.com/Xjectro)
