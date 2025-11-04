# Christmas Northwest - Holiday Lighting Website

## Overview
Christmas Northwest is a conversion-focused multi-page website for a professional Christmas light installation service in the Greater Seattle area. The site aims to attract quality-focused homeowners by emphasizing a premium, all-inclusive, stress-free service with transparent $800+ pricing. Key capabilities include a premium hero section with an embedded quote form, a comprehensive benefits showcase, a dedicated gallery page with categorized photos and lightbox view, persistent conversion elements, and a new year-round services offering. Built as a full-stack TypeScript application with React and Express, the project combines premium Christmas branding with a clean, conversion-optimized layout to maximize qualified quote requests. The business serves over 300 homes annually and is entering its fourth season of operation, now expanding to offer year-round outdoor lighting and property care services.

## User Preferences
Preferred communication style: Simple, everyday language - avoid em dashes and AI-sounding text.
Design approach: Conversion-focused layout modeled after Premier Home Pros (layout, CTA placement, form design, trust elements, simplicity) while maintaining Christmas theme colors and premium positioning.
CTA preference: Use "Light Up My Home ✨" for emotional appeal and customer-focused messaging instead of generic "consultation" or "request" language.

## System Architecture
### UI/UX Decisions
The design emphasizes a premium Christmas brand identity with a clean, conversion-optimized layout. Key UI/UX elements include a minimalist hero section with a strong headline and clear CTA, gold/amber accent colors applied tastefully, enlarged typography for impact and readability, generous section padding for premium whitespace, and prominent trust badges. The header logo is properly sized (h-16 md:h-20) for clear visibility, and phone numbers display on a single line with whitespace-nowrap for professional appearance. The site features a premium hero section, a dedicated quote form section, and a full gallery page with filtering and a lightbox using React Portal rendering for proper z-index layering. All primary CTAs are enhanced with larger text, shadow effects, and hover glows. Mobile responsiveness is a core consideration, with a responsive mobile navigation using Shadcn Sheet and all new elements tested for proper display on mobile devices. All navigation links (desktop, mobile, and logo) automatically scroll to the top of the page when clicked for better user experience. Footer links properly route to actual pages instead of placeholder anchors. Navigation now includes a Services dropdown menu (desktop) that organizes Christmas Lighting and Year-Round Services without cluttering the header, maintaining the clean 9-item navigation count.

### Technical Implementations
The frontend is a React 18 application with TypeScript, built using Vite. It utilizes Shadcn/ui for consistent components based on Radix UI primitives, styled with Tailwind CSS. Multi-page routing is managed by Wouter, and React Query handles server state. All gallery images are lazy-loaded for performance.
The backend is an Express.js server written in TypeScript, providing a RESTful API. It currently uses in-memory storage (MemStorage) for quote requests - submissions log to the server console for easy viewing. A PostgreSQL database is configured and available for future migration. A shared `shared/` directory ensures type safety between frontend and backend. Drizzle-Zod integrates runtime validation.

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
- **Pricing Guide Page:** Transparent pricing page titled "Pricing Guide: An Investment Into Your Holidays" with three tiered packages (Classic Roofline $800-$1,500, Signature Display $1,500-$3,000, Premier Estate $3,000-$6,000+), clearly listing all-inclusive services and explaining factors affecting investment. Navigation shows "Pricing Guide" label for customer-friendly terminology.
- **Quote Form with Zapier Integration:** Form submissions handled via React Query mutation to POST /api/quote-requests endpoint. Currently stored in-memory with console logging. Quote timeline options incentivize early booking (October/Early November, Mid-November, December) rather than Thanksgiving week. When a quote is submitted, the server automatically sends the quote data to Zapier webhook (if ZAPIER_WEBHOOK_URL environment variable is configured), enabling instant email and SMS notifications to christmaslightsnw@gmail.com and 425-215-0935.
- **Year-Round Services Page:** Dedicated page at /year-round-services featuring three premium service offerings: (1) Professional Gutter & Roof Maintenance powered by sister company Seattle ProWash ($300-$500, emphasizing convenience when taking down Christmas lights), (2) Permanent Lighting Solutions (starting at $1,500, year-round architectural lighting with smartphone control), and (3) Landscape/Bistro/Event Lighting (custom quote). Page includes a separate year-round quote form with service type dropdown (Gutter Cleaning, Permanent Lighting, Landscape/Bistro/Event Lighting) that integrates with the same Zapier webhook. FAQ section addresses common questions about timing, service area, and Seattle ProWash partnership. Premium positioning maintained throughout to avoid appearing as handyman service.
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

## Zapier Integration Setup

The website is configured to send instant notifications when customers submit quote requests. The webhook integration is ready and waiting for your Zapier webhook URL.

### How It Works
When a customer fills out the quote form on your website, the server automatically:
1. Saves the quote request to storage (currently in-memory, logs to console)
2. Sends all quote details to your Zapier webhook URL
3. Your Zapier automation handles email and SMS notifications

### Setup Instructions

**Step 1: Create Zapier Webhook**
1. Log in to Zapier and create a new Zap
2. Choose "Webhooks by Zapier" as the trigger
3. Select "Catch Hook" as the trigger event
4. Zapier will provide you with a webhook URL like: `https://hooks.zapier.com/hooks/catch/xxxxx/yyyyy/`
5. Copy this URL

**Step 2: Add Webhook URL to Replit**
1. In your Replit project, click the lock icon (🔒) to open Secrets
2. Click "New Secret"
3. Set the key as: `ZAPIER_WEBHOOK_URL`
4. Paste your Zapier webhook URL as the value
5. Click "Add Secret"

**Step 3: Restart Server**
After adding the secret, restart the "Start application" workflow so the server picks up the new environment variable.

**Step 4: Test the Integration**
Submit a test quote through your website form. You should see:
- A success message on the website
- The quote data logged in your server console
- The quote data received by your Zapier webhook

**Step 5: Configure Zapier Actions**
In your Zapier workflow, add actions to:
- Send email to christmaslightsnw@gmail.com
- Send SMS to 425-215-0935 (using Twilio or similar)
- Save to Google Sheets (optional)
- Any other automations you need

### Quote Data Format
The webhook sends the following data:
```json
{
  "id": "unique-uuid",
  "firstName": "Customer First Name",
  "lastName": "Customer Last Name",
  "email": "customer@example.com",
  "phone": "425-555-1234",
  "address": "123 Main Street",
  "zipCode": "98001",
  "serviceType": "Mid-November",
  "createdAt": "2024-11-03T12:00:00.000Z"
}
```

### Troubleshooting
- If webhooks aren't firing, verify the `ZAPIER_WEBHOOK_URL` secret is set correctly
- Check the server console logs for webhook status messages
- Test your Zapier webhook URL directly using a tool like Postman or curl
- Ensure your server has been restarted after adding the secret