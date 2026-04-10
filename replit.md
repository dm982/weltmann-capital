# WELTMANN Capital Landing Page

## Overview

This is a modern landing page for WELTMANN Capital, an institutional real estate investment platform focused on German multifamily and development deals. The application follows a reference-based design approach inspired by webild.io, featuring a minimal, institutional aesthetic with generous whitespace and smooth animations.

The landing page includes multiple sections: hero, three-step workflow, how it works, mid-page CTA, tabbed features, brand customization, intelligence features, FAQ, and an early access form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: TailwindCSS with CSS variables for theming, using shadcn/ui component library (New York style)
- **Animations**: Framer Motion for subtle scroll-based and interaction animations
- **State Management**: React Query (@tanstack/react-query) for server state, React useState for local component state
- **Icons**: Lucide React for consistent iconography

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server with HMR for frontend, tsx for running TypeScript server

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains database table definitions
- **In-Memory Fallback**: MemStorage class for development without database
- **Migrations**: Drizzle Kit for schema migrations stored in `/migrations`

### Project Structure
- `/client` - React frontend application
  - `/src/components/landing` - Landing page section components
  - `/src/components/ui` - Reusable shadcn/ui components
  - `/src/data/content.ts` - Centralized content/copy management
  - `/src/pages` - Page-level components
- `/server` - Express backend
  - `routes.ts` - API route definitions
  - `storage.ts` - Data access layer abstraction
- `/shared` - Shared code between frontend and backend (schema, types)

### Build System
- Development: `npm run dev` runs tsx for server with Vite middleware
- Production: `npm run build` uses esbuild for server and Vite for client
- Output: Server bundle to `dist/index.cjs`, client assets to `dist/public`

## External Dependencies

### UI Component Libraries
- shadcn/ui with Radix UI primitives (dialog, accordion, tabs, etc.)
- Framer Motion for animations
- Embla Carousel for carousels
- cmdk for command palette functionality

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Drizzle ORM for type-safe database operations
- connect-pg-simple for session storage

### Development Tools
- Vite with React plugin
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- PostCSS with Tailwind and Autoprefixer

### Content Management
- All site content centralized in `/client/src/data/content.ts`
- Design guidelines documented in `design_guidelines.md`