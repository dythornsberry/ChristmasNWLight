# Christmas Northwest - Holiday Lighting Website

## Overview

Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site emphasizes premium, all-inclusive, stress-free service with transparent $800+ pricing to attract quality-focused homeowners. Features include a premium hero section with embedded quote form, comprehensive benefits showcase, dedicated gallery page with 17 categorized photos and lightbox view, and persistent conversion elements. Built as a full-stack TypeScript application with React and Express, it combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests for its fourth season of operation, serving 300+ homes annually.

## Recent Changes

### November 2025 - Educational Pages & Mobile Navigation
- **Mobile Hamburger Menu:** Implemented responsive mobile navigation using Shadcn Sheet component with smooth slide-in animation. Menu includes all pages (Home, Gallery, Product Guide, Investment Guide), phone number, and prominent "Request Free Design" CTA. Active page highlighting included in mobile menu.
- **Product Guide Page:** Created educational page at `/product-guide` showcasing four premium product categories: C9 Bulbs (rooflines), Mini Lights (bushes/details), Ground/Pathway Lights, and Tree Wraps/Spheres. Each product features gradient hero styling, detailed descriptions, color options, specific use cases, and benefits. Maintains premium gold accent system throughout.
- **Investment Guide Page:** Built transparent pricing page at `/investment-guide` with three tiered packages: Essential Display ($800-$1,500), Signature Display ($1,500-$3,000), and Premier Estate ($3,000-$6,000+). Each tier clearly lists all-inclusive services with checkmarks. Added "What Affects Your Investment" section explaining property size, design complexity, premium add-ons, and accessibility factors. Pre-qualifies leads while maintaining premium positioning.
- **Desktop Navigation Active States:** Enhanced desktop navigation buttons to show primary variant for current active page, with ghost variant for inactive pages. Provides clear visual feedback of current location across all breakpoints.
- **Dynamic SEO Meta Tags:** Created PageHead component that dynamically updates document title and meta descriptions (standard, Open Graph, Twitter) for each page. Product Guide and Investment Guide now have unique, keyword-rich SEO titles and descriptions optimized for search engines.
- **Enhanced Testimonials:** Updated home page testimonials with 6 authentic Google reviews featuring specific service details: Barbara Hansen (35ft tree installation in rain/hail/wind), Blake Irving (same-day quote with on-site renderings), Kyle (2nd year repeat customer), and mentions of Dylan's team throughout. Reviews highlight all-weather reliability, attention to detail, and stress-free experience.
- **Routing Updates:** Added `/product-guide` and `/investment-guide` routes to App.tsx with proper page components.

### November 2025 - Premium Visual Enhancements
- **Typography Upgrade:** Enhanced all headlines from text-4xl/5xl to text-5xl/6xl for more impactful presence. Hero headline now uses text-9xl on desktop with font-black weight, tighter line-height (0.95), and tighter tracking for premium feel. Increased body copy from text-lg to text-xl throughout for better readability.
- **Gold Accent System:** Added subtle gold/amber accent colors to design system (--gold, --gold-muted, --gold-foreground). Applied tastefully to feature icons, card borders, badges, and trust elements. Stars in testimonials now use amber-400 instead of primary for premium touch.
- **Spacing Enhancement:** Increased section padding from py-20 to py-24, header margins from mb-16 to mb-20 for generous premium whitespace. Enhanced gap spacing between elements throughout site.
- **Section Reordering:** Moved Testimonials section immediately after QuoteFormSection (before Services) to leverage social proof earlier in conversion funnel. New order: Hero → Quote Form → Testimonials → Services → Portfolio → ColorOptions → BeforeAfter → Stats → About → Process → CTA → FAQ.
- **Portfolio Simplification:** Home page portfolio now displays only 6 featured premium installations instead of all 38, creating cleaner, more curated presentation. Full gallery accessible via prominent "View Full Gallery" CTA. Removed category filters from home portfolio for simplicity.
- **Color Options Reduction:** Streamlined from 6 to 4 color schemes, removing Mistletoe option. Now offers: Warm White, Multicolor, Red + White, and Red Green & Warm White - the most popular choices.
- **Premium CTA Styling:** Enhanced all primary CTAs with larger text (text-xl), shadow-2xl effects, hover glows, and premium borders while maintaining Shadcn size conventions. All buttons use size="lg" variant properly without custom height/padding.
- **Component Polish:** Added hover-elevate effects to service cards, enhanced quote form card with subtle gold border, added gradient backgrounds to feature icons, increased shadow intensities for depth.
- **Technical Fix:** Resolved nested link bug in StickyHeader causing React warnings by removing nested <a> tags within Link components.

### November 2025 - Premium Positioning & Conversion Optimization
- **Hero Section Major Simplification:** Completely redesigned hero for maximum visual impact. Now contains ONLY: headline "Premium Holiday Lighting, Zero Hassle" + short tagline + single "Request Free Design" CTA button + compact trust badge (Licensed, Bonded & Insured • $800+). Removed all clutter (pricing banner, star ratings, 24/7 badge, bullet points). Lightened gradient overlay from black/85-75-65 to black/50-30-transparent so beautiful Christmas lights background image is clearly visible. Moved quote form to dedicated section below hero.
- **Quote Form Relocation:** Created QuoteFormSection component displayed immediately after hero in its own dedicated section with full-width card layout. All CTAs scroll smoothly to this form. Maintains above-the-fold positioning while decluttering hero.
- **CTA Language Update:** Changed all "consultation" references to "design" or "free design estimate" throughout site (Hero, CTABanner, Process, Services, StickyBottomCTA) since service doesn't always include in-person visits for quotes.
- **Gallery Filters Simplified:** Home page portfolio filters changed from "All, Residential, Commercial, Custom, Details" to "All, Houses, Trees, Halloween" to match actual service offerings. Portfolio now includes 38 items showcasing Houses, Trees, and Halloween installations. Fixed color labeling - many photos previously labeled as "Red & Green" are actually "Red & Warm White" or "Red, Green & Warm White".
- **Em Dash Removal:** Replaced all em dashes (—) with regular dashes (-) or commas throughout site for natural, non-AI-sounding language.
- **Benefits Section:** 6 comprehensive benefit cards emphasizing all-inclusive service: Safety & Peace of Mind, Superior Commercial-Grade Materials, Time Savings & Stress-Free Experience, Maintenance Included, Secure Storage Year-Round, and Proven Excellence.
- **Sticky Bottom Bar:** Displays "BOOK NOW", "CALL NOW", "FREE DESIGN" for premium conversion elements.
- **Gallery Page:** Dedicated `/gallery` page with 22 real installation photos organized into categories (Warm White, Multicolor, Trees, Custom, Halloween). Features responsive 3-column grid, badge filtering, and full-screen lightbox with keyboard navigation (Escape/Arrow keys), close button, and overlay click support.
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

The styling system is built on Tailwind CSS with custom design tokens, including a Christmas-themed color palette using HSL variables with premium gold accents (--gold, --gold-muted, --gold-foreground), responsive typography (Playfair Display, Inter, Montserrat), and an elevation system for interactive elements. Dark mode is supported via a class strategy.

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