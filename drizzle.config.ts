import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config();
export default {
  driver: "mysql2",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as number | undefined,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB as string,
    // you can also use connection url
    // connectionString: "",
  },
} satisfies Config;
