import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";

// Webhook URL for Zapier notifications (set via environment variable)
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

async function sendWebhookNotification(data: any) {
  if (!ZAPIER_WEBHOOK_URL) {
    console.log('ℹ️ No Zapier webhook URL configured. Skipping webhook notification.');
    return;
  }

  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('✅ Webhook notification sent to Zapier successfully');
    } else {
      console.error('❌ Failed to send webhook notification:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Error sending webhook notification:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote Request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // Send webhook notification to Zapier (async, don't wait for it)
      sendWebhookNotification({
        event: 'new_quote_request',
        timestamp: new Date().toISOString(),
        quote: quoteRequest
      }).catch(err => console.error('Webhook error:', err));
      
      res.status(201).json(quoteRequest);
    } catch (error) {
      console.error("Error creating quote request:", error);
      res.status(400).json({ error: "Invalid quote request data" });
    }
  });

  // Get all quote requests (for Zapier polling or admin use)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getAllQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({ error: "Failed to fetch quote requests" });
    }
  });

  // Proxy Featurable API to fetch Google Reviews
  app.get("/api/featurable-reviews/:widgetId", async (req, res) => {
    try {
      const { widgetId } = req.params;
      const response = await fetch(`https://featurable.com/api/v1/widgets/${widgetId}`);
      
      if (!response.ok) {
        throw new Error(`Featurable API error: ${response.status}`);
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Error fetching Featurable reviews:", error);
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  // Sitemap.xml endpoint for SEO
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = process.env.SITE_URL || `${req.protocol}://${req.get('host')}`;

    const pages = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/gallery', priority: '0.9', changefreq: 'weekly' },
      { url: '/investment-guide', priority: '0.9', changefreq: 'monthly' },
      { url: '/faq', priority: '0.9', changefreq: 'weekly' },
      { url: '/about', priority: '0.7', changefreq: 'monthly' },
      { url: '/services', priority: '0.8', changefreq: 'monthly' },
      { url: '/product-guide', priority: '0.7', changefreq: 'monthly' },
      { url: '/year-round-services', priority: '0.8', changefreq: 'monthly' },
      { url: '/service-areas', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.6', changefreq: 'monthly' },
      
      // City landing pages (high priority for local SEO - all 14 markets)
      { url: '/bellevue', priority: '0.9', changefreq: 'monthly' },
      { url: '/kirkland', priority: '0.9', changefreq: 'monthly' },
      { url: '/seattle', priority: '0.9', changefreq: 'monthly' },
      { url: '/woodinville', priority: '0.9', changefreq: 'monthly' },
      { url: '/bothell', priority: '0.9', changefreq: 'monthly' },
      { url: '/kenmore', priority: '0.9', changefreq: 'monthly' },
      { url: '/redmond', priority: '0.9', changefreq: 'monthly' },
      { url: '/sammamish', priority: '0.9', changefreq: 'monthly' },
      { url: '/newcastle', priority: '0.9', changefreq: 'monthly' },
      { url: '/mercer-island', priority: '0.9', changefreq: 'monthly' },
      { url: '/shoreline', priority: '0.9', changefreq: 'monthly' },
      { url: '/lake-forest-park', priority: '0.9', changefreq: 'monthly' },
      { url: '/issaquah', priority: '0.9', changefreq: 'monthly' },
      { url: '/mill-creek', priority: '0.9', changefreq: 'monthly' },
      
      // Blog
      { url: '/blog', priority: '0.8', changefreq: 'weekly' },
      { url: '/blog/christmas-lighting-trends-2025', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog/warm-white-vs-multicolor-lights', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog/professional-christmas-light-installation-guide', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog/book-christmas-lights-september', priority: '0.7', changefreq: 'monthly' },
      { url: '/blog/christmas-light-installation-safety', priority: '0.7', changefreq: 'monthly' },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  const httpServer = createServer(app);

  return httpServer;
}
