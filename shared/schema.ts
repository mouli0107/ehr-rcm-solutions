import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export * from "./models/auth";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  requestType: text("request_type").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;

export const whitePaperDownloads = pgTable("white_paper_downloads", {
  id: serial("id").primaryKey(),
  whitePaperId: text("white_paper_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  practiceAddress: text("practice_address").notNull(),
  downloadReason: text("download_reason").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWhitePaperDownloadSchema = createInsertSchema(whitePaperDownloads).omit({
  id: true,
  createdAt: true,
});

export type InsertWhitePaperDownload = z.infer<typeof insertWhitePaperDownloadSchema>;
export type WhitePaperDownload = typeof whitePaperDownloads.$inferSelect;
