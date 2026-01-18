import { PrismaClient } from "./generated/prisma";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Load environment variables from the db package's .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
process.loadEnvFile?.(join(__dirname, ".env"));

export const prismaClient = new PrismaClient({});