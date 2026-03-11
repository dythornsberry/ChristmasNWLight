import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { hasDatabase } from "./db";
import { insertQuoteRequestSchema } from "@shared/schema";
import { sendLeadNotificationEmail } from "./gmail";
import cron from "node-cron";

// Webhook URL for Zapier notifications (set via environment variable)
const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

// Admin API key for protected endpoints (set via environment variable)
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

// Middleware to check admin API key
function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers['x-admin-key'] || req.query.admin_key;
  
  if (!ADMIN_API_KEY) {
    // If no admin key is configured, block access entirely
    return res.status(503).json({ error: "Admin access not configured" });
  }
  
  if (apiKey !== ADMIN_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  
  next();
}

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

// Send error alert via Zapier
async function sendErrorAlert(errorData: {
  errorType: string;
  errorMessage: string;
  requestData?: any;
  timestamp: string;
}) {
  if (!ZAPIER_WEBHOOK_URL) {
    console.log('ℹ️ No Zapier webhook configured for error alerts');
    return;
  }

  try {
    await fetch(ZAPIER_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: 'FORM_ERROR_ALERT',
        priority: 'HIGH',
        ...errorData
      }),
    });
    console.log('🚨 Error alert sent to Zapier');
  } catch (e) {
    console.error('Failed to send error alert:', e);
  }
}

async function runWeeklyFormTest() {
  const testData = {
    fullName: "Dylan Thornsberry [WEEKLY TEST]",
    email: "dythornsberry@gmail.com",
    phone: "425-283-6335",
    address: "6516 NE 192nd Pl, Kenmore, WA 98028",
    zipCode: "98028",
    serviceType: "christmas-2026-new"
  };

  console.log('Submitting weekly test form...');

  const validatedData = insertQuoteRequestSchema.parse(testData);
  const quoteRequest = await storage.createQuoteRequest(validatedData);

  await storage.createErrorLog({
    eventType: 'weekly_health_check',
    status: 'success',
    requestData: JSON.stringify(testData),
    userAgent: 'HealthCheck/1.0',
    ipAddress: 'internal',
    errorMessage: null
  });

  await sendWebhookNotification({
    event: 'new_quote_request',
    timestamp: new Date().toISOString(),
    quote: quoteRequest
  });

  await sendLeadNotificationEmail(quoteRequest);

  console.log('Weekly test form submitted successfully - check Zapier and Gmail');
  return quoteRequest;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote Request endpoint with comprehensive error logging
  app.post("/api/quote-requests", async (req, res) => {
    const requestData = JSON.stringify(req.body);
    const userAgent = req.get('user-agent') || 'unknown';
    const ipAddress = req.ip || req.socket.remoteAddress || 'unknown';
    
    try {
      // Log the attempt
      await storage.createErrorLog({
        eventType: 'form_submission_attempt',
        status: 'pending',
        requestData,
        userAgent,
        ipAddress,
        errorMessage: null
      });

      // Validate and save to database
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // Log success
      await storage.createErrorLog({
        eventType: 'form_submission_success',
        status: 'success',
        requestData,
        userAgent,
        ipAddress,
        errorMessage: null
      });
      
      // Send webhook notification to Zapier (async, don't wait for it)
      sendWebhookNotification({
        event: 'new_quote_request',
        timestamp: new Date().toISOString(),
        quote: quoteRequest
      }).catch(err => console.error('Webhook error:', err));
      
      // Send Gmail notification as backup (async, don't wait for it)
      sendLeadNotificationEmail(quoteRequest).catch(err => console.error('Gmail notification error:', err));
      
      res.status(201).json(quoteRequest);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error("❌ Error creating quote request:", errorMessage);
      
      // Log the error to database
      try {
        await storage.createErrorLog({
          eventType: 'form_submission_error',
          status: 'error',
          requestData,
          userAgent,
          ipAddress,
          errorMessage
        });
      } catch (logError) {
        console.error("Failed to log error to database:", logError);
      }
      
      // Send error alert via Zapier so you get notified immediately
      sendErrorAlert({
        errorType: 'FORM_SUBMISSION_FAILED',
        errorMessage,
        requestData: req.body,
        timestamp: new Date().toISOString()
      }).catch(e => console.error('Failed to send error alert:', e));
      
      res.status(400).json({ error: "Invalid quote request data" });
    }
  });

  // Get all quote requests (PROTECTED - admin only)
  app.get("/api/quote-requests", requireAdminAuth, async (req, res) => {
    try {
      const quoteRequests = await storage.getAllQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({ error: "Failed to fetch quote requests" });
    }
  });

  // Get recent error logs (PROTECTED - admin only)
  app.get("/api/error-logs", requireAdminAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const errorLogs = await storage.getRecentErrorLogs(limit);
      res.json(errorLogs);
    } catch (error) {
      console.error("Error fetching error logs:", error);
      res.status(500).json({ error: "Failed to fetch error logs" });
    }
  });

  // Health check endpoint
  app.get("/api/health", async (req, res) => {
    try {
      await storage.getRecentErrorLogs(1);
      res.json({ 
        status: 'healthy', 
        database: hasDatabase ? 'connected' : 'disabled',
        storage: hasDatabase ? 'database' : 'memory',
        timestamp: new Date().toISOString() 
      });
    } catch (error) {
      res.status(500).json({ 
        status: 'unhealthy', 
        database: 'disconnected',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
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
      { url: '/permanent-lighting', priority: '0.8', changefreq: 'monthly' },
      { url: '/product-guide', priority: '0.7', changefreq: 'monthly' },
      { url: '/year-round-services', priority: '0.8', changefreq: 'monthly' },
      { url: '/service-areas', priority: '0.7', changefreq: 'monthly' },
      { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
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

  // Manual health check trigger (admin-protected)
  app.post("/api/health-check/test-form", requireAdminAuth, async (_req, res) => {
    try {
      const result = await runWeeklyFormTest();
      res.json({ success: true, message: "Weekly form test completed", result });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ success: false, error: errorMessage });
    }
  });

  // Weekly form health check - Every Monday at 8:00 AM Pacific (UTC-8 = 16:00 UTC, UTC-7 DST = 15:00 UTC)
  // Using America/Los_Angeles timezone for automatic DST handling
  cron.schedule('0 8 * * 1', async () => {
    console.log('Running weekly form health check (Monday 8 AM Pacific)...');
    try {
      await runWeeklyFormTest();
      console.log('Weekly form health check completed successfully');
    } catch (error) {
      console.error('Weekly form health check failed:', error);
    }
  }, {
    timezone: "America/Los_Angeles"
  });

  console.log('Weekly form health check scheduled: Every Monday at 8:00 AM Pacific');

  const httpServer = createServer(app);

  return httpServer;
}
