# Christmas Northwest - Holiday Lighting Website

## Overview
Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site aims to attract quality-focused homeowners by emphasizing a premium, all-inclusive, stress-free service with transparent $800+ pricing. Key capabilities include a premium hero section with an embedded quote form, a comprehensive benefits showcase, a dedicated gallery page with categorized photos and lightbox view, and persistent conversion elements. Built as a full-stack TypeScript application with React and Express, the project combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests. The business serves over 300 homes annually and is entering its fourth season of operation.

## User Preferences
Preferred communication style: Simple, everyday language - avoid em dashes and AI-sounding text.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.
CTA preference: Use "Light Up My Home ✨" for emotional appeal and customer-focused messaging instead of generic "consultation" or "request" language.

## System Architecture
### UI/UX Decisions
The design emphasizes a premium Christmas brand identity with a clean, conversion-optimized layout. Key UI/UX elements include a minimalist hero section with a strong headline and clear CTA, gold/amber accent colors applied tastefully, enlarged typography for impact and readability, generous section padding for premium whitespace, and prominent trust badges. The site features a premium hero section, a dedicated quote form section, and a full gallery page with filtering and a lightbox. All primary CTAs are enhanced with larger text, shadow effects, and hover glows. Mobile responsiveness is a core consideration, with a responsive mobile navigation using Shadcn Sheet and all new elements tested for proper display on mobile devices. All navigation links (desktop, mobile, and logo) automatically scroll to the top of the page when clicked for better user experience.

### Technical Implementations
The frontend is a React 18 application with TypeScript, built using Vite. It utilizes Shadcn/ui for consistent components based on Radix UI primitives, styled with Tailwind CSS. Multi-page routing is managed by Wouter, and React Query handles server state. All gallery images are lazy-loaded for performance.
The backend is an Express.js server written in TypeScript, providing a RESTful API. It uses Drizzle ORM with PostgreSQL for data persistence, configured with `@neondatabase/serverless` for serverless database connectivity. A shared `shared/` directory ensures type safety between frontend and backend. Drizzle-Zod integrates runtime validation.

### Feature Specifications
- **Urgency Banner:** Top banner with "Beat the Rush - Reserve Your Preferred Install Date Today" message across all pages to encourage early booking.
- **Hero Section:** Minimalist design with a compelling headline, tagline, a single "Light Up My Home ✨" CTA, and compact trust badges.
- **Quote Form:** Dedicated section immediately following the hero, with all CTAs smoothly scrolling to it.
- **Promise Section:** Four-card guarantee section highlighting 1-week installation, 48-hour touch-ups, 100% satisfaction refund, and commercial-grade equipment.
- **Differentiator Section:** Showcases same-week installation, commercial-grade equipment, included storage, and responsive service.
- **Services Section:** Six benefit cards highlighting the all-inclusive, stress-free service.
- **Portfolio & Gallery:** A curated preview on the homepage, with a full, dedicated gallery page featuring 17 categorized photos, badge filtering, and a full-screen lightbox with keyboard navigation.
- **Testimonials:** Enhanced testimonials from Google reviews highlighting service details and reliability.
- **Product Guide Page:** Educational page showcasing six premium product categories (C9 Bulbs, Mini Lights, Ground & Pathway Lights, Tree Wraps, Light Spheres, Wreaths & Garland) with detailed descriptions, color options, and use cases.
- **Investment Guide Page:** Transparent pricing page with three tiered packages, clearly listing all-inclusive services and explaining factors affecting investment.
- **Sticky Bottom Bar:** Persistent conversion element with "BOOK NOW", "CALL NOW", "FREE DESIGN" CTAs.
- **Dynamic SEO:** PageHead component dynamically updates document titles and meta descriptions for each page.

### System Design Choices
The styling system is based on Tailwind CSS with custom design tokens, a Christmas-themed color palette using HSL variables, and an elevation system. Typography uses Playfair Display, Inter, and Montserrat. Dark mode is supported. Development utilizes Vite HMR and TSX, with Drizzle Kit for database schema management.

## External Dependencies
### Core Framework & Data
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: TypeScript ORM
- **drizzle-kit**: CLI for schema migrations
- **express**: Node.js web framework
- **vite**: Frontend build tool
- **@vitejs/plugin-react**: Vite plugin for React
- **typescript**: Static type checking

### UI & Styling
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Unstyled, accessible UI component primitives
- **lucide-react**: Icon library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component primitives

### Form & State Management
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Form validation resolver for Zod
- **zod**: Schema validation library
- **@tanstack/react-query**: Async state management for server data

### Routing & Utilities
- **wouter**: Minimal client-side routing library
- **date-fns**: Date utility library

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express