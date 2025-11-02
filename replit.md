# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site emphasizes premium, all-inclusive, stress-free service with transparent $800+ pricing to attract quality-focused homeowners. Features include a premium hero section with embedded quote form, comprehensive benefits showcase, dedicated gallery page with 17 categorized photos and lightbox view, and persistent conversion elements. Built as a full-stack TypeScript application with React and Express, it combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests for its fourth season of operation, serving 300+ homes annually.

## Recent Changes

### November 2025 - Premium Positioning & Conversion Optimization
- **Hero Section Major Simplification:** Completely redesigned hero for maximum visual impact. Now contains ONLY: headline "Premium Holiday Lighting, Zero Hassle" + short tagline + single "Request Free Design" CTA button + compact trust badge (Licensed, Bonded & Insured • $800+). Removed all clutter (pricing banner, star ratings, 24/7 badge, bullet points). Lightened gradient overlay from black/85-75-65 to black/50-30-transparent so beautiful Christmas lights background image is clearly visible. Moved quote form to dedicated section below hero.
- **Quote Form Relocation:** Created QuoteFormSection component displayed immediately after hero in its own dedicated section with full-width card layout. All CTAs scroll smoothly to this form. Maintains above-the-fold positioning while decluttering hero.
- **CTA Language Update:** Changed all "consultation" references to "design" or "free design estimate" throughout site (Hero, CTABanner, Process, Services, StickyBottomCTA) since service doesn't always include in-person visits for quotes.
- **Gallery Filters Simplified:** Home page portfolio filters changed from "All, Residential, Commercial, Custom, Details" to "All, Houses, Trees, Halloween" to match actual service offerings. Portfolio now includes 35 items showcasing Houses, Trees, and Halloween installations.
- **Em Dash Removal:** Replaced all em dashes (—) with regular dashes (-) or commas throughout site for natural, non-AI-sounding language.
- **Benefits Section:** 6 comprehensive benefit cards emphasizing all-inclusive service: Safety & Peace of Mind, Superior Commercial-Grade Materials, Time Savings & Stress-Free Experience, Maintenance Included, Secure Storage Year-Round, and Proven Excellence.
- **Sticky Bottom Bar:** Displays "BOOK NOW", "CALL NOW", "FREE DESIGN" for premium conversion elements.
- **Gallery Page:** Dedicated `/gallery` page with 17 real installation photos organized into categories. Features responsive 3-column grid, badge filtering, and full-screen lightbox with keyboard navigation (Escape/Arrow keys), close button, and overlay click support.
- **Performance:** Implemented lazy loading on all gallery images.

## User Preferences

Preferred communication style: Simple, everyday language - avoid em dashes and AI-sounding text.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.
CTA preference: Use "Request Free Design" instead of "consultation" since quotes don't always require in-person visits.

## System Architecture

### Frontend Architecture

The frontend is a React 18 application with TypeScript, built using Vite for fast development and optimized production builds. It leverages Shadcn/ui for consistent, accessible components, built on Radix UI primitives, and styled with Tailwind CSS using a custom design system. Key components include:
- **StickyHeader:** Main navigation with Gallery link and phone/CTA buttons
- **Hero:** Minimalist hero with "Premium Holiday Lighting, Zero Hassle" headline, short tagline, single CTA button, and compact trust badge. Lightened gradient overlay (black/50-30-transparent) to showcase beautiful Christmas lights background image
- **QuoteFormSection:** Dedicated quote form component in its own section immediately after hero. Full-width card layout with all form fields and smooth scroll accessibility
- **Services:** 6 comprehensive benefit cards emphasizing all-inclusive, stress-free service from design through storage
- **Portfolio:** Preview gallery with 6 photos, category filters, and "View Full Gallery" CTA
- **GalleryPage:** Dedicated page with 17 categorized photos, badge-based filtering, lightbox with full-screen viewing, keyboard navigation (Escape/Arrow keys), and multiple close methods
- **ColorOptions, BeforeAfter:** Product showcase components
- **StickyBottomCTA:** Persistent conversion element with premium CTAs ("BOOK NOW", "CALL NOW", "FREE DESIGN")
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