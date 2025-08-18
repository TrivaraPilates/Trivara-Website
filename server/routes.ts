import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSignupSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Newsletter signup endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      const signup = await storage.createNewsletterSignup(validatedData);
      res.json({ success: true, message: "Successfully joined the Founder's List!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data provided",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Contact message endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully! We'll be in touch soon." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data provided",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your message" 
        });
      }
    }
  });

  // Get all newsletter signups (admin endpoint)
  app.get("/api/newsletter", async (req, res) => {
    try {
      const signups = await storage.getAllNewsletterSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching signups" 
      });
    }
  });

  // Get all contact messages (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
