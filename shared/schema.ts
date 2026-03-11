import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import {
  LEAD_FORM_MIN_COMPLETION_MS,
  formatPhoneNumber,
  getAddressValidationError,
  getEmailValidationError,
  getNameValidationError,
  getPhoneValidationError,
  getZipCodeValidationError,
  leadServiceTypes,
  normalizeLeadEmail,
  requiresProjectAddress,
} from "./leadValidation";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  zipCode: text("zip_code").notNull(),
  serviceType: text("service_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuoteRequestSchema = z
  .object({
    fullName: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string().optional().default(""),
    zipCode: z.string(),
    serviceType: z.enum(leadServiceTypes),
    website: z.string().optional().default(""),
    formStartedAt: z.number().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.website.trim() !== "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Spam protection triggered.",
        path: ["website"],
      });
    }

    const fullNameError = getNameValidationError(data.fullName, "full name");
    if (fullNameError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: fullNameError,
        path: ["fullName"],
      });
    }

    const emailError = getEmailValidationError(data.email);
    if (emailError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: emailError,
        path: ["email"],
      });
    }

    const phoneError = getPhoneValidationError(data.phone);
    if (phoneError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: phoneError,
        path: ["phone"],
      });
    }

    const addressError = getAddressValidationError(data.address ?? "", {
      required: requiresProjectAddress(data.serviceType),
    });
    if (addressError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: addressError,
        path: ["address"],
      });
    }

    const zipCodeError = getZipCodeValidationError(data.zipCode);
    if (zipCodeError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: zipCodeError,
        path: ["zipCode"],
      });
    }

    if (
      typeof data.formStartedAt === "number" &&
      Date.now() - data.formStartedAt < LEAD_FORM_MIN_COMPLETION_MS
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please take a moment to review your details and try again.",
        path: ["formStartedAt"],
      });
    }
  })
  .transform((data) => ({
    fullName: data.fullName.replace(/\s+/g, " ").trim(),
    email: normalizeLeadEmail(data.email),
    phone: formatPhoneNumber(data.phone),
    address: data.address.replace(/\s+/g, " ").trim(),
    zipCode: data.zipCode.replace(/\D/g, "").slice(0, 5),
    serviceType: data.serviceType,
  }));

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

// Error logging table for tracking all submission attempts and failures
export const errorLogs = pgTable("error_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  eventType: text("event_type").notNull(), // 'form_submission_attempt', 'form_submission_error', 'webhook_error'
  status: text("status").notNull(), // 'success', 'error'
  errorMessage: text("error_message"),
  requestData: text("request_data"), // JSON string of the attempted submission
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertErrorLogSchema = createInsertSchema(errorLogs).omit({
  id: true,
  createdAt: true,
});

export type InsertErrorLog = z.infer<typeof insertErrorLogSchema>;
export type ErrorLog = typeof errorLogs.$inferSelect;
