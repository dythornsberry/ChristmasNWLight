# Christmas Northwest - Holiday Lighting Website

## Overview
Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site aims to attract quality-focused homeowners by emphasizing a premium, all-inclusive, stress-free service with transparent $800+ pricing. It includes a premium hero section with an embedded quote form, a comprehensive benefits showcase, a dedicated gallery page, persistent conversion elements, and year-round services. Built as a full-stack TypeScript application with React and Express, the project combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests. The business is expanding to offer year-round outdoor lighting and property care services.

## User Preferences
Preferred communication style: Simple, everyday language - avoid em dashes and AI-sounding text.
Design approach: Visual-first homepage redesign inspired by WiseGuys Lights (more images, less text, gallery/reviews upfront). Conversion-focused layout with simplified process, 2-card services, and clean hierarchy.
CTA preference: Use "Light Up My Home ✨" for emotional appeal and customer-focused messaging instead of generic "consultation" or "request" language.
Navigation philosophy: "Header = what 95% of visitors need, Footer = everything else"

## System Architecture
### UI/UX Decisions
The design emphasizes a premium Christmas brand identity with a visual-first, conversion-optimized layout. Homepage structure prioritizes images over text with this flow: Hero → ReviewsStrip (5.0 rating + 3 quick testimonials) → Portfolio Gallery (6 featured installations) → SimpleServices (2 large visual cards for Christmas + Year-Round) → Quote Form → Before/After → Stats → Simplified Process (4 steps) → CTA. Text-heavy sections (Promise, Differentiator, 6-card Services, Color Options, About, FAQ, Service Areas grid) removed from homepage and relocated to dedicated pages. Key UI/UX elements include a minimalist hero section, gold/amber accent colors, enlarged typography, generous section padding, prominent trust badges, and properly sized logos. Phone numbers display on a single line. All primary CTAs are enhanced with larger text, shadow effects, and hover glows. Mobile responsiveness is a core consideration, with a responsive mobile navigation using Shadcn Sheet. Navigation links (desktop, mobile, and logo) automatically scroll to the top of the page. Footer links properly route to actual pages. Navigation includes a Services dropdown menu (desktop) for Christmas Lighting and Year-Round Services.

### Technical Implementations
The frontend is a React 18 application with TypeScript, built using Vite. It utilizes Shadcn/ui (based on Radix UI) for components, styled with Tailwind CSS. Wouter manages multi-page routing, and React Query handles server state. Gallery images are lazy-loaded. The backend is an Express.js server in TypeScript, providing a RESTful API. It uses in-memory storage (MemStorage) for quote requests but is configured for a future PostgreSQL migration. A shared `shared/` directory ensures type safety, and Drizzle-Zod integrates runtime validation.

### Feature Specifications
- **Urgency Banner**: "Beat the Rush - Reserve Your Preferred Install Date Today" across all pages.
- **Hero Section**: Minimalist design with headline, tagline, "Light Up My Home ✨" CTA, and trust badges.
- **ReviewsStrip Component**: Compact reviews section with 5.0 Google rating, quick stats (300+ Homes, 3 Crews, 24/7 Support), and 3 condensed review snippets. Displays immediately after hero for social proof.
- **SimpleServices Component**: 2 large visual service cards (Christmas Lighting and Year-Round Services) with hero images and concise bullet-pointed benefits, replacing the old 6-card text-heavy Services section.
- **Simplified Process Component**: 4-step process with icons and minimal text (Contact Us → Free Estimate → Schedule Install → Enjoy the Season), replacing the previous wordy process description.
- **Quote Form**: Dedicated section positioned after SimpleServices, with all CTAs scrolling to it.
- **Portfolio & Gallery**: Curated homepage preview featuring 6 premium installations (Complete Holiday Scene, Family Holiday Tradition, Premium Custom Display, Striking Night Display, Classic Winter Wonderland, Grand Estate Entrance) to showcase bigger jobs and variety with custom work, big trees, multicolor designs, and beautiful winter displays; full gallery page with optimized 3-section layout: (1) Featured Premium Installations showcasing top 9 photos first to immediately hook visitors, (2) "See These Installations Come to Life" video section with 6 embedded lazy-loaded YouTube Shorts for engagement, (3) "More Premium Installations" with remaining 41 photos for comprehensive browsing. Gallery includes category filtering, lightbox with correct offset indexing across sections, and technical photo protection on all images: right-click disabled, drag prevention, text selection disabled, and visible "ChristmasNW.com" watermarks (gallery grid, lightbox, homepage portfolio, and before/after slider).
- **Social Media Integration**: Footer links to Facebook, Instagram, YouTube, Google Business Profile; gallery includes "Visit Our YouTube Channel" CTA.
- **Testimonials**: Enhanced Google reviews.
- **Product Guide Page**: Educational page for six premium product categories (C9 Bulbs, Mini Lights, etc.) with descriptions and use cases.
- **Pricing Guide Page**: Transparent "Pricing Guide: An Investment Into Your Holidays" with three tiered packages ($800+, $1,500+, $3,000+) detailing all-inclusive services.
- **Quote Form with Zapier Integration**: Submissions POST to `/api/quote-requests` (in-memory storage, console logging). Quote timeline options incentivize early booking. Automatically sends data to Zapier webhook if `ZAPIER_WEBHOOK_URL` is configured.
- **Year-Round Services Page**: Dedicated page at `/year-round-services` for Gutter & Roof Maintenance, Permanent Lighting Solutions, and Landscape/Bistro/Event Lighting. Includes a separate year-round quote form with service type dropdown, integrating with the Zapier webhook.
- **Sticky Bottom Bar**: Persistent "BOOK NOW", "CALL NOW", "FREE DESIGN" CTAs.
- **City Landing Pages**: Dedicated SEO-optimized pages for all 14 cities in service area (Seattle, Bellevue, Kirkland, Woodinville, Bothell, Kenmore, Redmond, Sammamish, Newcastle, Mercer Island, Shoreline, Lake Forest Park, Issaquah, Mill Creek) with city-specific content, LocalBusiness schema with accurate geo coordinates, neighborhood lists, and local landmarks for enhanced local search visibility.
- **Blog System**: Full content marketing platform with 5 complete, SEO-optimized blog posts (1500-2500 words each) to drive organic traffic:
  - "Top 5 Christmas Lighting Trends for 2025" (Trends, 5 min read)
  - "How to Choose Between Warm White and Multicolor Lights" (Buying Guide, 4 min read)  
  - "The Complete Guide to Professional Christmas Light Installation" (Installation, 8 min read)
  - "Why You Should Book Your Christmas Lights in September" (Planning, 6 min read)
  - "Christmas Light Installation Safety" (Safety, 7 min read)
  - Each post includes natural, conversational content with Seattle-area examples, individual post pages with SEO metadata, and CTA sections
- **SEO & ChatGPT Optimization**: 
  - Dynamic meta tags via `PageHead` component (titles, descriptions, Open Graph tags)
  - XML sitemap at `/sitemap.xml` with 30 pages including 14 city landing pages, blog index, and 5 individual blog posts
  - robots.txt file for search engine crawler guidance with sitemap reference
  - Sitewide Organization schema in App.tsx with logo, contact info, social profiles, service areas, and founding date
  - FAQPage and LocalBusiness schema markup on FAQ page with embedded Review/AggregateRating data
  - 6 individual Google reviews embedded in LocalBusiness schema for star rating rich snippets
  - City-specific LocalBusiness schemas with accurate geo coordinates for each of 14 city pages (Seattle, Bellevue, Kirkland, Woodinville, Bothell, Kenmore, Redmond, Sammamish, Newcastle, Mercer Island, Shoreline, Lake Forest Park, Issaquah, Mill Creek)
  - VideoObject schema markup for 6 YouTube videos on gallery page (compliant with Google's structured data guidelines)
  - Descriptive alt text on all 50 gallery images for AI understanding and accessibility
  - Service area coverage for all 14 cities with 14 dedicated city landing pages
  - "2025" freshness signals in page titles
  - Bing Webmaster Tools verification file (BingSiteAuth.xml)
  - Natural language content optimized for AI understanding

### System Design Choices
The styling system uses Tailwind CSS with custom design tokens, a Christmas-themed HSL color palette, and an elevation system. Typography uses Playfair Display, Inter, and Montserrat. Dark mode is supported. Development uses Vite HMR and TSX, with Drizzle Kit for database schema management.

## External Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: TypeScript ORM
- **drizzle-kit**: CLI for schema migrations
- **express**: Node.js web framework
- **vite**: Frontend build tool
- **@vitejs/plugin-react**: Vite plugin for React
- **typescript**: Static type checking
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Unstyled, accessible UI component primitives
- **lucide-react**: Icon library
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **vaul**: Drawer component primitives
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Form validation resolver for Zod
- **zod**: Schema validation library
- **@tanstack/react-query**: Async state management for server data
- **wouter**: Minimal client-side routing library
- **date-fns**: Date utility library
- **connect-pg-simple**: PostgreSQL session store for Express
- **Zapier**: Webhook integration for quote request notifications.
- **Bing Webmaster Tools**: For search engine indexing and visibility in ChatGPT.