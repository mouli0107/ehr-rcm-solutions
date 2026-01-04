import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertWhitePaperDownloadSchema } from "@shared/schema";
import { z } from "zod";
import { sendContactEmail } from "./resend";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact Request API
  app.post("/api/contact", async (req, res) => {
    try {
      const validated = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validated);
      
      // Send email notification
      const emailResult = await sendContactEmail({
        firstName: validated.name.split(' ')[0] || validated.name,
        lastName: validated.name.split(' ').slice(1).join(' ') || '',
        email: validated.email,
        phone: validated.phone || undefined,
        company: validated.company || undefined,
        message: validated.message || undefined,
        requestType: validated.requestType || 'General Inquiry',
      });
      
      if (!emailResult.success) {
        console.error("Email notification failed:", emailResult.error);
      }
      
      res.status(201).json(contactRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        console.error("Error creating contact request:", error);
        res.status(500).json({ error: "Failed to submit contact request" });
      }
    }
  });

  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getAllContactRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ error: "Failed to fetch contact requests" });
    }
  });

  app.post("/api/white-paper-download", async (req, res) => {
    try {
      const validated = insertWhitePaperDownloadSchema.parse(req.body);
      const download = await storage.createWhitePaperDownload(validated);
      res.status(201).json({ success: true, downloadId: download.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        console.error("Error creating white paper download:", error);
        res.status(500).json({ error: "Failed to process download request" });
      }
    }
  });

  app.get("/api/white-paper-downloads", async (req, res) => {
    try {
      const downloads = await storage.getAllWhitePaperDownloads();
      res.json(downloads);
    } catch (error) {
      console.error("Error fetching white paper downloads:", error);
      res.status(500).json({ error: "Failed to fetch downloads" });
    }
  });

  return httpServer;
}
