# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site features an auto-rotating hero carousel with flagship installation photos, a dedicated gallery page with 17 categorized photos and lightbox view, and an embedded quote form for lead generation. Built as a full-stack TypeScript application with React and Express, it combines premium Christmas branding with a clean, conversion-optimized layout to maximize quote requests for its fourth season of operation, serving hundreds of homes annually.

## Recent Changes

### November 2025 - Photo Gallery Enhancement
- **Hero Carousel:** Replaced static background with auto-rotating carousel featuring 4 flagship photos (child with tree, family photo, brick mansion, custom tree display). Auto-rotates every 5 seconds with pause-on-interaction functionality. Manual controls include previous/next buttons and clickable indicators.
- **Gallery Page:** Created dedicated `/gallery` page with 17 real installation photos organized into 5 categories (All, Warm White, Multicolor, Trees, Custom). Features responsive 3-column grid, category badge filtering, and full-screen lightbox with navigation.
- **Portfolio Section:** Added "View Full Gallery" CTA button linking to gallery page, maintaining existing 6-photo preview grid.
- **Performance:** Implemented lazy loading on all gallery images for optimized page load performance.
- **Navigation:** Added Gallery link to sticky header between Services and Testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.

## System Architecture

### Frontend Architecture

The frontend is a React 18 application with TypeScript, built using Vite for fast development and optimized production builds. It leverages Shadcn/ui for consistent, accessible components, built on Radix UI primitives, and styled with Tailwind CSS using a custom design system. Key components include:
- **StickyHeader:** Main navigation with Gallery link and phone/CTA buttons
- **Hero:** Auto-rotating carousel with 4 flagship photos, manual controls (prev/next buttons, indicators), embedded quote form, and pause-on-interaction functionality
- **Portfolio:** Preview gallery with 6 photos, category filters, and "View Full Gallery" CTA
- **GalleryPage:** Dedicated page with 17 categorized photos, badge-based filtering, lightbox with full-screen viewing and navigation
- **ColorOptions, BeforeAfter:** Product showcase components
- **StickyBottomCTA:** Persistent conversion element

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