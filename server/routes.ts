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

  const httpServer = createServer(app);

  return httpServer;
}
