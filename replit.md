# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site emphasizes premium, all-inclusive, stress-free service with transparent $800+ pricing to attract quality-focused homeowners. Features include a premium hero section with embedded quote form, comprehensive benefits showcase, dedicated gallery page with 17 categorized photos and lightbox view, and persistent conversion elements. Built as a full-stack TypeScript application with React and Express, it combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests for its fourth season of operation, serving 300+ homes annually.

## Recent Changes

### November 2025 - Premium Positioning & Conversion Optimization
- **Hero Section:** Reverted to static premium background image with "Premium Holiday Lighting, Zero Hassle" headline emphasizing stress-free value proposition. Updated quote form to "Reserve Your Premium Installation" with "Get My Free Consultation" CTA. Prominently displays $800+ pricing, licensing/bonding/insurance credentials, and 5-star ratings for trust-building.
- **Benefits Section:** Expanded from 4 to 6 comprehensive benefit cards emphasizing all-inclusive service: Safety & Peace of Mind, Superior Commercial-Grade Materials, Time Savings & Stress-Free Experience, Maintenance Included, Secure Storage Year-Round, and Proven Excellence. Section subtitle reinforces done-for-you messaging from design consultation through storage.
- **CTA Refinement:** Updated all CTAs for premium alignment - Sticky bottom bar now displays "BOOK NOW", "CALL NOW", "FREE CONSULT" (previously "SCHEDULE", "CALL NOW!", "GET A QUOTE").
- **Testimonials Section:** Refined subtitle to "Homeowners who value quality trust us year after year for stress-free, stunning results" to better target quality-focused clientele.
- **Gallery Page:** Created dedicated `/gallery` page with 17 real installation photos organized into 5 categories (All, Warm White, Multicolor, Trees, Custom). Features responsive 3-column grid, category badge filtering, and full-screen lightbox with keyboard navigation (Escape to close, Arrow keys to navigate), close button, and overlay click support.
- **Performance:** Implemented lazy loading on all gallery images for optimized page load performance.
- **Navigation:** Added Gallery link to sticky header between Services and Testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.

## System Architecture

### Frontend Architecture

The frontend is a React 18 application with TypeScript, built using Vite for fast development and optimized production builds. It leverages Shadcn/ui for consistent, accessible components, built on Radix UI primitives, and styled with Tailwind CSS using a custom design system. Key components include:
- **StickyHeader:** Main navigation with Gallery link and phone/CTA buttons
- **Hero:** Premium static background image with "Premium Holiday Lighting, Zero Hassle" headline, stress-free value proposition, embedded quote form ("Reserve Your Premium Installation"), transparent $800+ pricing display, and trust credentials (Licensed, Bonded & Insured)
- **Services:** 6 comprehensive benefit cards emphasizing all-inclusive, stress-free service from design through storage
- **Portfolio:** Preview gallery with 6 photos, category filters, and "View Full Gallery" CTA
- **GalleryPage:** Dedicated page with 17 categorized photos, badge-based filtering, lightbox with full-screen viewing, keyboard navigation (Escape/Arrow keys), and multiple close methods
- **ColorOptions, BeforeAfter:** Product showcase components
- **StickyBottomCTA:** Persistent conversion element with premium CTAs ("BOOK NOW", "CALL NOW", "FREE CONSULT")
- **Testimonials:** Social proof section with tagline targeting quality-focused homeowners

Multi-page routing is handled by Wouter, and React Query manages server state. All gallery images use lazy loading for optimal performance.

### Backend Architecture

The backend is an Express.js server written in TypeScript, providing a RESTful API. It uses Drizzle ORM with PostgreSQL for data persistence, configured with `@neondatabase/serverless` for serverless database connectivity. A shared `shared/` directory ensures type safety between frontend and backend. Drizzle-Zod integrates runtime validation from database schemas, and an in-memory storage fallback is available for development.

### Styling System

The styling system is built on Tailwind CSS with custom design tokens, including a Christmas-themed color palette using HSL variables, responsive typography (Playfair Display, Inter, Montserrat), and an elevation system for interactive elements. Dark mode is supported via a class strategy.

### Build & Deployment

Development uses `npm run dev` with Vite HMR and TSX. Production builds (`npm run build`) create optimized client and server bundles. Database schema management is handled by Drizzle Kit (`npm run db:push`).

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: TypeScript ORM
- **drizzle-kit**: CLI for schema migrations
- **express**: Node.js web framework
- **vite**: Frontend build tool
- **@vitejs/plugin-react**: Vite plugin for React

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Unstyled, accessible UI component primitives
- **class-variance-authority**: Component variant styling
- **tailwind-merge**: Utility for merging Tailwind classes
- **lucide-react**: Icon library

### Form & Data Management
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Form validation resolver for Zod
- **zod**: Schema validation library
- **@tanstack/react-query**: Async state management for server data

### Routing & Navigation
- **wouter**: Minimal client-side routing library

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **typescript**: Static type checking
- **tsx**: TypeScript execution engine

### Session & Storage
- **connect-pg-simple**: PostgreSQL session store for Express
- **date-fns**: Date utility library

### Additional UI Components
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component primitives