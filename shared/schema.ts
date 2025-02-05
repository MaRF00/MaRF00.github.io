import { pgTable, text, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const repairRequests = pgTable("repair_requests", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  deviceType: varchar("device_type", { length: 50 }).notNull(),
  issueDescription: text("issue_description").notNull(),
  preferredDate: timestamp("preferred_date").notNull(),
});

export const insertRepairRequestSchema = createInsertSchema(repairRequests).pick({
  name: true,
  email: true,
  phone: true,
  deviceType: true,
  issueDescription: true,
  preferredDate: true,
}).extend({
  email: z.string().email(),
  phone: z.string().min(10).max(20),
});

export type InsertRepairRequest = z.infer<typeof insertRepairRequestSchema>;
export type RepairRequest = typeof repairRequests.$inferSelect;
