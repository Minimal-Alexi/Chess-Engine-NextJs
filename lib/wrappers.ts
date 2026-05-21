import { cookies } from "next/headers";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export async function authFetch(
  url: string,
  method: HttpMethod = "GET",
  body?: unknown
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const hasBody = body !== undefined;

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
    },
    body: hasBody ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    console.error(res);
    throw new Error("Request failed");
  }

  return res;
}