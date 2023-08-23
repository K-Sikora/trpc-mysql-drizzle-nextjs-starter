import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

export const connection = mysql.createPool({
  host: process.env.DB_HOST as string,
  port: process.env.DB_PORT as number | undefined,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB as string,
  connectionLimit: 10,
});

export const db = drizzle(connection);
