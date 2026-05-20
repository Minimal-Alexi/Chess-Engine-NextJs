"use client";
import { toast } from "sonner";
import useField from "@/hook/useField";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function RegisterForm() {
    const ctx = useContext(UserContext)
  
    if (!ctx) throw new Error("User context not available.");
  
  const router = useRouter();
  const emailField = useField('email');
  const userField = useField('username');
  const passwordField = useField('password')

async function handleSubmit(e: React.SubmitEvent) {
  e.preventDefault();

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userField.value,
      email: emailField.value,
      password: passwordField.value,
    }),
  });

  const registerJson = await res.json()

  if (res.ok) {
    ctx?.login(registerJson.user.username,registerJson.user.id);
    toast.success(`${res.status}:${registerJson.message}`)
    router.push("/dashboard/games");
  }
  else{
    toast.error(`${res.status}:${registerJson.message}`)
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6"
    >
      <h1 className="text-2xl font-bold">Register</h1>

      <input
        {...userField}
        type="username"
        placeholder="Username"
        className="rounded border p-2"
      />

      <input
        {...emailField}
        type="email"
        placeholder="Email"
        className="rounded border p-2"
      />

      <input
        {...passwordField}
        type="password"
        placeholder="Password"
        className="rounded border p-2"
      />

      <button
        type="submit"
        className="rounded bg-black p-2 text-white"
      >
        Sign Up
      </button>
    </form>
  );
}