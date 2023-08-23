# Starter for Next.js app router with tRPC, MySQL, Drizzle, zod.

With this repo you can immediately start creating your app with Next.js app router, tRPC, MySQL, Drizzle and zod.

## Getting started

1. ### Clone this repo `git clone https://github.com/K-Sikora/trpc-mysql-drizzle-nextjs-starter`
2. ### Install dependencies `npm install`
3. ### Follow these steps:

- [ ] Create .env file and insert db connection info (check .env.example)
- [ ] Replace example schema with your schema inside of /src/db/schema.ts
- [ ] Generate migration files with `npm run drizzle:generate` (they will appear in /src/db/migrations)
- [ ] Push your schema with `npm run drizzle:push`
- [ ] Replace example procedures with your own inside of /src/server/index.ts
- [ ] Modify queries/mutations in example components to test connection (or just delete them)

### To pull schema from existing db you can run `npm run drizzle:introspect`
