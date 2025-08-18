import { type User, type InsertUser, type NewsletterSignup, type InsertNewsletterSignup, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createNewsletterSignup(signup: InsertNewsletterSignup): Promise<NewsletterSignup>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllNewsletterSignups(): Promise<NewsletterSignup[]>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private newsletterSignups: Map<string, NewsletterSignup>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.newsletterSignups = new Map();
    this.contactMessages = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createNewsletterSignup(insertSignup: InsertNewsletterSignup): Promise<NewsletterSignup> {
    const id = randomUUID();
    const signup: NewsletterSignup = { 
      ...insertSignup, 
      id, 
      createdAt: new Date() 
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllNewsletterSignups(): Promise<NewsletterSignup[]> {
    return Array.from(this.newsletterSignups.values());
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
