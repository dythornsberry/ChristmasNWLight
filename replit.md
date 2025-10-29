# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a professional Christmas light installation service website targeting the Greater Seattle area (Kenmore, Kirkland, Bothell, Woodinville). The application is a conversion-focused single-page website modeled after Premier Home Pros' lead-generation approach, featuring an embedded quote form in the hero section, sticky bottom CTAs, and streamlined service presentation. Built as a full-stack TypeScript application with React frontend and Express backend, it emphasizes premium Christmas branding with a clean, conversion-optimized layout designed to maximize quote requests.

## Recent Changes (October 29, 2025)

**Complete Premier Home Pros-Inspired Redesign with Navigation**
- Added sticky header with navigation links (Services, Portfolio, Color Options, About, Contact), phone number, and "Get a Quote" CTA
- Redesigned hero with full-width background image, headline "Fast, Affordable, and Beautiful Holiday Lighting", subheadline "Installed in as little as one day!", and embedded quote form
- Added Portfolio gallery section with category filters (Residential, Commercial, Custom, Details) showcasing 11 installation images
- Added Color Options section displaying 4 lighting color schemes (Warm White, Pure White, Red + White, Multicolor)
- Added Before/After comparison section showing home transformation
- Redesigned Services section as "Why Choose Christmas Northwest" with 4 feature cards (no images, conversion-focused)
- Redesigned About section with clean two-column layout and Premier Home Pros-style copy
- Added CTA Banner section with promotional offer and quote/call buttons
- Maintained sticky bottom CTA bar with SCHEDULE / CALL NOW / GET QUOTE buttons
- All navigation and CTAs use smooth scrolling to section IDs (#services, #portfolio, #colors, #about, #contact, #quote)
- Complete conversion-first layout with generous white space while maintaining premium Christmas branding
- Mobile-responsive design with stacking layouts across all sections

## User Preferences

Preferred communication style: Simple, everyday language.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.

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
- Reusable feature components in `client/src/components/`:
  - **StickyHeader.tsx**: Fixed navigation header with links, phone, and CTA
  - **Hero.tsx**: Full-width background with embedded quote form (id="quote")
  - **Services.tsx**: "Why Choose" feature cards (4 cards, 2x2 grid, icon-based, id="services")
  - **Portfolio.tsx**: Installation gallery with category filters (id="portfolio")
  - **ColorOptions.tsx**: 4 lighting color scheme cards (id="colors")
  - **BeforeAfter.tsx**: Side-by-side transformation comparison
  - **Stats.tsx**: 4 stat cards (Google rating, clients, pricing, experience)
  - **Testimonials.tsx**: Real Google reviews with rating badges
  - **About.tsx**: Two-column layout with team image and Premier Home Pros-style copy (id="about")
  - **CTABanner.tsx**: Promotional offer banner with quote/call CTAs
  - **FAQ.tsx**: Accordion-based frequently asked questions
  - **Footer.tsx**: Company info, contact details, service areas (id="contact")
  - **StickyBottomCTA.tsx**: Fixed bottom CTA bar with 3 action buttons
- UI primitives in `client/src/components/ui/` following Shadcn conventions

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

## Page Structure & User Flows

### Current Page Layout (Complete Redesign)
1. **Sticky Header** - Navigation bar (Services, Portfolio, Colors, About, Contact), phone, "Get a Quote" CTA
2. **Hero Section** - Full-width background image with embedded quote form
   - Headline: "Fast, Affordable, and Beautiful Holiday Lighting"
   - Subheadline: "Installed in as little as one day!"
   - 10% off badge, trust badges (5-star rating, warranty, licensed/insured)
   - Quote form with 6 fields (firstName, lastName, email, phone, zipCode, serviceType)
   - Form wrapper has `id="quote"` for scroll-to-quote functionality
3. **Services Section** (id="services") - "Why Choose Christmas Northwest" with 4 icon-based feature cards
4. **Portfolio Section** (id="portfolio") - Gallery with category filters showing 11 installation images
5. **Color Options Section** (id="colors") - 4 lighting color scheme cards with images
6. **Before/After Section** - Side-by-side transformation comparison
7. **Stats Section** - 4 stat cards showing key metrics
8. **Testimonials Section** - Real Google reviews in card grid
9. **About Section** (id="about") - Two-column layout with team image and company story
10. **CTA Banner Section** - Promotional offer with quote/call CTAs
11. **FAQ Section** - Accordion with common questions and answers
12. **Footer** (id="contact") - Contact info, service areas, company details
13. **Sticky Bottom CTA** - Fixed overlay with 3 action buttons (SCHEDULE, CALL NOW, GET A QUOTE)

### Primary Conversion Flow
1. User lands on homepage with hero form immediately visible
2. User either:
   - Fills out hero form directly (right side of hero), OR
   - Clicks any CTA button (header "Get Free Quote", sticky SCHEDULE/GET A QUOTE) to scroll to hero form, OR
   - Clicks sticky CALL NOW button to dial directly (425-215-0935)
3. User submits form → toast notification confirms receipt
4. Backend logs submission (ready for API integration)

### Navigation & CTA Button Behavior
**Sticky Header Navigation:**
- **Services**: Scrolls to Services section (#services)
- **Portfolio**: Scrolls to Portfolio section (#portfolio)
- **Color Options**: Scrolls to Color Options section (#colors)
- **About**: Scrolls to About section (#about)
- **Contact**: Scrolls to Footer/Contact section (#contact)
- **Get a Quote**: Scrolls to hero form (#quote)
- **Phone Number**: Direct dial (tel:425-215-0935)

**Sticky Bottom CTA Bar:**
- **SCHEDULE**: Scrolls to hero form (#quote)
- **CALL NOW**: Direct phone dial (tel:425-215-0935)
- **GET A QUOTE**: Scrolls to hero form (#quote)

**CTA Banner:**
- **Get Free Quote**: Scrolls to hero form (#quote)
- **Phone Button**: Direct dial (tel:425-215-0935)

### Form Validation & Handling
- All fields required (email, phone, zip validated by format)
- Service type dropdown defaults to "Residential Installation"
- On submit: Logs data to console, displays success toast
- Form uses React Hook Form with Zod validation
- Ready for backend API integration

## Design Philosophy

### Conversion-Focused Approach (Premier Home Pros Model)
- Sticky navigation header provides easy access to all sections while keeping quote CTA prominent
- Lead form embedded directly in hero (no scrolling required)
- Multiple persistent CTAs (sticky header, sticky bottom bar, CTA banner) for maximum conversion opportunities
- Portfolio gallery, color options, and before/after sections showcase value and build trust without overwhelming
- Clear value propositions in "Why Choose" services section
- Trust elements placed early (Google rating, licensing badges in hero)
- Clean layouts with generous white space throughout all sections
- Mobile-responsive with stacking layouts across all components

### Premium Christmas Branding
- Christmas-themed color palette (red, green, gold, winter white)
- Premium typography (Playfair Display headlines, Inter body, Montserrat CTAs)
- Elevated design with shadows and card styling
- Professional imagery (team photos, installation examples)
- White-glove service messaging throughout

### Target Audience
- Homeowners in Greater Seattle area (Kenmore, Kirkland, Bothell, Woodinville)
- Discerning customers seeking premium installation service
- Focus on quality, safety, and professional results
- Price point: $800+ starting for complete service