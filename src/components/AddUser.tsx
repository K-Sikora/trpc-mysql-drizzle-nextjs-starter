"use client";
import { trpc } from "../trpc/client";
import { useState } from "react";
export default function AddUser() {
  const context = trpc.useContext();
  const addUser = trpc.addUser.useMutation({
    onSettled: () => {
      context.getUsers.invalidate();
    },
  });
  const [username, setUsername] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border bg-transparent px-2 py-1 border-gray-100"
        placeholder="Username..."
      />
      <button
        className="py-2 px-6 border border-gray-100"
        onClick={() => {
          addUser.mutate(username);
          setUsername("");
        }}
      >
        Add user
      </button>
    </div>
  );
}
