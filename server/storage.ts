import { 
  type User, type InsertUser, 
  type QuoteRequest, type InsertQuoteRequest,
  type ErrorLog, type InsertErrorLog,
  users, quoteRequests, errorLogs
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  createErrorLog(errorLog: InsertErrorLog): Promise<ErrorLog>;
  getRecentErrorLogs(limit?: number): Promise<ErrorLog[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const [quoteRequest] = await db.insert(quoteRequests).values({
      ...insertQuoteRequest,
      address: insertQuoteRequest.address || null,
    }).returning();
    
    console.log('📋 New quote request saved to database:', quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  async createErrorLog(insertErrorLog: InsertErrorLog): Promise<ErrorLog> {
    const [errorLog] = await db.insert(errorLogs).values(insertErrorLog).returning();
    console.log('📝 Error logged to database:', errorLog);
    return errorLog;
  }

  async getRecentErrorLogs(limit: number = 50): Promise<ErrorLog[]> {
    return db.select().from(errorLogs).orderBy(desc(errorLogs.createdAt)).limit(limit);
  }
}

export const storage = new DatabaseStorage();
