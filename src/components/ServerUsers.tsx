import { serverClient } from "../trpc/server-client";

export default async function ServerUsers() {
  const usersFromServer = await serverClient.getUsers();

  return (
    <div className="flex flex-wrap gap-2 w-64">
      {usersFromServer.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
}
