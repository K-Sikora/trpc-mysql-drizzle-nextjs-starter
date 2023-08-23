import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/src/server";

export const trpc = createTRPCReact<AppRouter>({});
