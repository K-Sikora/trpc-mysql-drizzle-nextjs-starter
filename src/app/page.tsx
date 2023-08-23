export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col p-24 items-center bg-slate-950 text-slate-50">
      <p className="mb-8">
        This is a template to start your project with MySQL, Drizzle, tRPC and
        zod.{" "}
        <a
          className="font-bold underline"
          target="_blank"
          href="https://orm.drizzle.team/docs/installation-and-db-connection"
        >
          Check Drizzle docs
        </a>{" "}
        if you want to implement different database.
      </p>
      <h1 className="text-4xl font-bold">Steps:</h1>
      <ul className="list-disc">
        <li className="my-8">
          Create .env file and insert db connection info (check .env.example)
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
        <li className="my-8">
          Replace example schema with your schema inside of /src/db/schema.ts
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
        <li className="my-8">
          Generate migration files with{" "}
          <code className="bg-slate-700 py-0 5 px-1">
            npm run drizzle:generate
          </code>{" "}
          (they will appear in /src/db/migrations)
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
        <li className="my-8">
          Push your schema with{" "}
          <code className="bg-slate-700 py-0 5 px-1">npm run drizzle:push</code>
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
        <li className="my-8">
          Replace example procedures with your own inside of
          /src/server/index.ts
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
        <li className="my-8">
          Modify queries/mutations in example components to test connection (or
          just delete them)
          <input
            className="ml-4 scale-150"
            type="checkbox"
          />
        </li>
      </ul>
      <p className="mt-8">
        To pull schema from existing db you can run{" "}
        <code className="bg-slate-700 py-0.5 px-1">
          npm run drizzle:introspect
        </code>
      </p>
      <p className="mt-8">
        Be aware of config files while changing file structure ❗
      </p>
    </div>
  );
}
