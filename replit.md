# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a professional Christmas light installation service website targeting the Greater Seattle area (Kenmore, Kirkland, Bothell, Woodinville). The application is a marketing-focused single-page website showcasing services, portfolio work, customer testimonials, and lead generation through a quote request form. Built as a full-stack TypeScript application with React frontend and Express backend, it emphasizes premium design aesthetics inspired by high-end service providers like Airbnb.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single page application with 404 fallback)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Component Library**
- Shadcn/ui component system (New York style variant) providing consistent, accessible components
- Radix UI primitives for headless, accessible UI components (accordion, dialog, dropdown, etc.)
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for variant-based component styling

**Design System**
- Custom color system using HSL variables with CSS custom properties
- Responsive typography scale optimized for premium feel
- Elevation system using shadow and backdrop effects (`hover-elevate`, `active-elevate-2` classes)
- Design guidelines document specifies premium service provider aesthetic with festive e-commerce richness
- Typography: Playfair Display (headlines), Inter (body/UI), Montserrat (CTAs) - loaded via Google Fonts

**Component Structure**
- Page-level components in `client/src/pages/`
- Reusable feature components in `client/src/components/` (Hero, Services, Portfolio, Testimonials, etc.)
- UI primitives in `client/src/components/ui/` following Shadcn conventions
- Example components demonstrate proper usage patterns

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- TypeScript for type safety across the stack
- Custom middleware for request logging with response capture
- Vite integration in development mode with SSR-ready setup

**Data Layer**
- Drizzle ORM configured for PostgreSQL with schema-first approach
- Database schema defined in `shared/schema.ts` for type sharing between client/server
- Drizzle-Zod integration for runtime validation from database schema
- In-memory storage implementation (`MemStorage`) as development fallback
- Storage abstraction layer (`IStorage` interface) allows swapping implementations

**API Design**
- RESTful API pattern (routes prefixed with `/api`)
- Shared types between frontend and backend via `shared/` directory
- Request/response logging middleware captures JSON responses for debugging

### Build & Deployment

**Development**
- `npm run dev`: Runs development server with Vite HMR
- TSX for TypeScript execution without compilation step
- Vite plugins: runtime error overlay, Replit cartographer, dev banner

**Production Build**
- `npm run build`: Vite builds client to `dist/public`, esbuild bundles server to `dist/`
- Server bundle uses ESM format with external packages
- Static assets served from built output
- Type checking via `npm run check` (no emit)

**Database Management**
- `npm run db:push`: Drizzle Kit push schema to database
- Migration files stored in `migrations/` directory
- Database URL required via `DATABASE_URL` environment variable

### Styling System

**Tailwind Configuration**
- Custom border radius values (9px, 6px, 3px for lg, md, sm)
- Extensive color palette with opacity support via HSL values
- Custom CSS variables for theme consistency
- Dark mode support via class strategy
- PostCSS with autoprefixer for vendor prefixing

**Design Tokens**
- Primary colors for brand identity and CTAs
- Muted/accent colors for hierarchy
- Card/popover system with dedicated border colors
- Destructive variant for error states
- Elevation variables (`--elevate-1`, `--elevate-2`) for layered interactions

### File Organization

**Path Aliases**
- `@/*` → `client/src/*` (frontend code)
- `@shared/*` → `shared/*` (shared types/schemas)
- `@assets/*` → `attached_assets/*` (images, static assets)

**Key Directories**
- `client/`: Frontend application code
- `server/`: Backend Express application
- `shared/`: Shared TypeScript types and database schemas
- `attached_assets/`: Static images and generated imagery for portfolio

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: TypeScript ORM for type-safe database operations
- **drizzle-kit**: CLI tool for schema migrations and database management
- **express**: Node.js web framework for API server
- **vite**: Frontend build tool and development server
- **@vitejs/plugin-react**: Vite plugin for React Fast Refresh

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Collection of unstyled, accessible UI component primitives (20+ components)
- **class-variance-authority**: Component variant styling utility
- **tailwind-merge**: Utility for merging Tailwind classes without conflicts
- **lucide-react**: Icon library with tree-shakeable components

### Form & Data Management
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolver for Zod schemas
- **zod**: Schema validation library
- **@tanstack/react-query**: Async state management for server data

### Routing & Navigation
- **wouter**: Minimal client-side routing library (lighter alternative to React Router)

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements (error overlay, cartographer, dev banner)
- **typescript**: Static type checking
- **tsx**: TypeScript execution engine for development

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **date-fns**: Date utility library for formatting and manipulation

### Additional UI Components
- **cmdk**: Command menu component for search/navigation
- **embla-carousel-react**: Carousel/slider component library
- **vaul**: Drawer component primitives

### Notes on Database
- Application uses Drizzle ORM which is database-agnostic at the ORM level
- Currently configured for PostgreSQL via Neon serverless driver
- Schema is defined in TypeScript and can be migrated to any Drizzle-supported database
- In-memory fallback storage exists for development without database