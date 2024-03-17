import "dotenv/config";
import { resolve, dirname } from "node:path";
import { db } from "./db/db";
import { migrate } from "drizzle-orm/libsql/migrator";

const __dirname = dirname(new URL(import.meta.url).pathname);

await migrate(db, { migrationsFolder: resolve(__dirname, "../migrations") });
