"use client";
import { useAuth } from "@/context/authContext";
import useField from "@/hook/useField";
import { registerUser } from "@/lib/auth";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const router = useRouter();
  const {login} = useAuth()
  const emailField = useField('email');
  const userField = useField('username');
  const passwordField = useField('password')

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    try {
      const data = await registerUser({
        "username":userField.value,
        "email":emailField.value,
        "password":passwordField.value
      })
      if(data.user.session_id){
        login(data.user.session_id);
        router.push("/dashboard/games")
      }
    } catch (err) {
      console.error(err);
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