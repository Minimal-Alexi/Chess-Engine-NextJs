"use client";
import useField from "@/hook/useField";
import { loginUser } from "@/lib/auth";

export default function LoginForm() {
  const emailField = useField('email');
  const passwordField = useField('password')

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    try {
      console.log({
        "email":emailField.value,
        "password":passwordField.value
      })
      const data = await loginUser({
        "email":emailField.value,
        "password":passwordField.value
      })
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6"
    >
      <h1 className="text-2xl font-bold">Login</h1>

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
        Log In
      </button>
    </form>
  );
}