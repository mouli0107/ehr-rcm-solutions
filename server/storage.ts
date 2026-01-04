import { contactRequests, whitePaperDownloads, type ContactRequest, type InsertContactRequest, type WhitePaperDownload, type InsertWhitePaperDownload } from "@shared/schema";
import { db } from "./db";
import { desc } from "drizzle-orm";

export interface IStorage {
  createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
  createWhitePaperDownload(insertDownload: InsertWhitePaperDownload): Promise<WhitePaperDownload>;
  getAllWhitePaperDownloads(): Promise<WhitePaperDownload[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const [request] = await db
      .insert(contactRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests).orderBy(desc(contactRequests.createdAt));
  }

  async createWhitePaperDownload(insertDownload: InsertWhitePaperDownload): Promise<WhitePaperDownload> {
    const [download] = await db
      .insert(whitePaperDownloads)
      .values(insertDownload)
      .returning();
    return download;
  }

  async getAllWhitePaperDownloads(): Promise<WhitePaperDownload[]> {
    return await db.select().from(whitePaperDownloads).orderBy(desc(whitePaperDownloads.createdAt));
  }
}

export const storage = new DatabaseStorage();
