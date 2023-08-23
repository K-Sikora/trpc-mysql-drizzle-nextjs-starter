import { publicProcedure, router } from "./trpc";
import { db } from "../db";
import { users } from "../db/schema";
import { z } from "zod";
export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await db.select().from(users);
  }),
  addUser: publicProcedure.input(z.string()).mutation(async (payload) => {
    return await db.insert(users).values({ username: payload.input });
  }),
});

export type AppRouter = typeof appRouter;
