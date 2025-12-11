import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact Request API
  app.post("/api/contact", async (req, res) => {
    try {
      const validated = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validated);
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

  return httpServer;
}
