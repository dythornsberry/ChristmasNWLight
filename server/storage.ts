import { 
  type User, type InsertUser, 
  type QuoteRequest, type InsertQuoteRequest,
  type ErrorLog, type InsertErrorLog,
  users, quoteRequests, errorLogs
} from "@shared/schema";
import { db, hasDatabase } from "./db";
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
  private get database() {
    if (!db) {
      throw new Error("Database storage is unavailable");
    }

    return db;
  }

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await this.database.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await this.database.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await this.database.insert(users).values(insertUser).returning();
    return user;
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const [quoteRequest] = await this.database.insert(quoteRequests).values({
      ...insertQuoteRequest,
      address: insertQuoteRequest.address || null,
    }).returning();
    
    console.log('📋 New quote request saved to database:', quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return this.database.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  async createErrorLog(insertErrorLog: InsertErrorLog): Promise<ErrorLog> {
    const [errorLog] = await this.database.insert(errorLogs).values(insertErrorLog).returning();
    console.log('📝 Error logged to database:', errorLog);
    return errorLog;
  }

  async getRecentErrorLogs(limit: number = 50): Promise<ErrorLog[]> {
    return this.database.select().from(errorLogs).orderBy(desc(errorLogs.createdAt)).limit(limit);
  }
}

export class MemoryStorage implements IStorage {
  private users = new Map<string, User>();
  private quoteRequests: QuoteRequest[] = [];
  private logs: ErrorLog[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: randomUUID(),
      ...insertUser,
    };

    this.users.set(user.id, user);
    return user;
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const quoteRequest: QuoteRequest = {
      id: randomUUID(),
      ...insertQuoteRequest,
      address: insertQuoteRequest.address || null,
      createdAt: new Date(),
    };

    this.quoteRequests.unshift(quoteRequest);
    console.log("📋 New quote request saved to in-memory storage:", quoteRequest);
    return quoteRequest;
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return [...this.quoteRequests];
  }

  async createErrorLog(insertErrorLog: InsertErrorLog): Promise<ErrorLog> {
    const errorLog: ErrorLog = {
      id: randomUUID(),
      ...insertErrorLog,
      errorMessage: insertErrorLog.errorMessage ?? null,
      requestData: insertErrorLog.requestData ?? null,
      userAgent: insertErrorLog.userAgent ?? null,
      ipAddress: insertErrorLog.ipAddress ?? null,
      createdAt: new Date(),
    };

    this.logs.unshift(errorLog);
    console.log("📝 Error logged to in-memory storage:", errorLog);
    return errorLog;
  }

  async getRecentErrorLogs(limit: number = 50): Promise<ErrorLog[]> {
    return this.logs.slice(0, limit);
  }
}

export const storage: IStorage = hasDatabase ? new DatabaseStorage() : new MemoryStorage();
