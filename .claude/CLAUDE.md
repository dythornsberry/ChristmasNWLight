# Christmas NW Light

## Overview
Christmas and holiday lighting installation business website serving the Greater Seattle area.

- **Domain:** christmasnw.com
- **Hosting:** Cloudflare (DNS/CDN) + Replit (autoscale server)
- **Owner:** Dylan Thornsberry (dythornsberry@gmail.com)
- **Lead email:** christmaslightsnw@gmail.com

## Tech Stack
- **Framework:** React 18.3 + TypeScript (full-stack)
- **Frontend Build:** Vite 5.4
- **Backend:** Express 4.21 (Node.js, ES modules)
- **Routing:** Wouter 3.3 (lightweight client router)
- **Styling:** Tailwind CSS 3.4 + shadcn/ui (Radix UI) + Framer Motion
- **Database:** PostgreSQL 16 via Neon Serverless + Drizzle ORM
- **Forms:** React Hook Form + Zod
- **Email:** Gmail API (via Replit connector) + Resend (optional)
- **Webhooks:** Zapier (server-side proxy)
- **Analytics:** Google Analytics 4 (G-49KQKR00QM)
- **Maps:** Google Maps/Places API
- **Reviews:** Featurable (Google Reviews proxy)
- **Charts:** Recharts 2.15

## Quick Start
```bash
npm run dev        # Express + Vite dev on port 5000
npm run build      # Vite client build + esbuild server bundle
npm run start      # Production: node dist/index.js
npm run db:push    # Apply Drizzle migrations
npm run check      # TypeScript type checking
```

## Project Structure
```
client/src/         # React frontend
server/             # Express backend
shared/             # Shared types & validation (schema.ts, leadValidation.ts)
migrations/         # Drizzle auto-generated migrations
functions/          # Serverless functions
```

## Form Submission Flow
1. User fills out `LeadFormCard` (multi-step: service selection → contact info → property details)
2. Client POSTs to `/api/quote-requests`
3. Server (routes.ts) does:
   - Spam detection (honeypot "website" field)
   - Rate limiting (5 requests per 10 min per IP)
   - Zod validation
   - Save to `quoteRequests` table in PostgreSQL
   - Log to `errorLogs` table
   - Async: Forward to Zapier webhook + Gmail notification to christmaslightsnw@gmail.com
4. Weekly health check: Cron runs every Monday at 8 AM Pacific

## Key Files
- `client/src/components/LeadFormCard.tsx` — Main lead form (597 lines)
- `client/src/components/AddressAutocompleteField.tsx` — Google Places integration
- `server/routes.ts` — All API endpoints (395 lines)
- `server/gmail.ts` — Gmail notification service
- `server/storage.ts` — Database CRUD (DatabaseStorage/MemoryStorage fallback)
- `shared/schema.ts` — Drizzle ORM tables + Zod schemas
- `shared/leadValidation.ts` — Validation rules & phone formatting
- `client/src/lib/leads.ts` — Client-side lead validation
- `client/src/lib/analytics.ts` — GA conversion tracking

## Environment Variables
```
# Client (VITE_ prefix)
VITE_SITE_URL=https://christmasnw.com
VITE_GA_MEASUREMENT_ID=G-49KQKR00QM
VITE_GOOGLE_MAPS_API_KEY
VITE_ZAPIER_WEBHOOK_URL

# Server
DATABASE_URL=postgresql://...  (Neon Serverless)
ADMIN_API_KEY
ZAPIER_WEBHOOK_URL
```

## Admin & Debug
- `GET /api/quote-requests` — List submissions (X-Admin-Key header or admin_key param)
- `GET /api/error-logs?limit=50` — View logs (protected)
- `POST /api/health-check/test-form` — Manual health check (protected)

## Database Tables (Drizzle/PostgreSQL)
- `users` — Authentication
- `quote_requests` — Lead submissions (fullName, email, phone, address, zipCode, serviceType)
- `error_logs` — Submission tracking (eventType, status, errorMessage, requestData)

## Pages & SEO
- Homepage, Contact, Gallery, FAQ, Investment Guide, Blog
- 14 city landing pages: Bellevue, Kirkland, Seattle, Woodinville, Bothell, Kenmore, Redmond, Sammamish, Newcastle, Mercer Island, Shoreline, Lake Forest Park, Issaquah, Mill Creek
- Dynamic sitemap at `/sitemap.xml`

## Path Aliases
- `@/` → client/src
- `@shared/` → shared
- `@assets/` → attached_assets

## Deployment
Replit autoscale → Cloudflare DNS pointing to Replit
- Port: 5000 (production, single port)
- Dev: Vite on 5173, Express on 5000
