import { PrismaClient } from "@prisma/client";

export const db = (globalThis as { prisma?: PrismaClient }).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as { prisma?: PrismaClient }).prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.