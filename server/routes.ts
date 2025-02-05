import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRepairRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

export function registerRoutes(app: Express): Server {
  app.post("/api/repair-requests", async (req, res) => {
    try {
      const repairRequest = insertRepairRequestSchema.parse(req.body);
      const result = await storage.createRepairRequest(repairRequest);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
