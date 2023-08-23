"use client";
import { trpc } from "../trpc/client";

export default function ClientUsers() {
  const { data, isLoading } = trpc.getUsers.useQuery();
  return (
    <div className="flex flex-wrap gap-2 w-64">
      {isLoading ? (
        <p className="h-10">Loading...</p>
      ) : (
        data?.map((user) => <div key={user.id}>{user.username}</div>)
      )}
    </div>
  );
}
