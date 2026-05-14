const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  session_id: string;
  user: {
    id: string;
    username: string;
  };
};

export async function loginUser(
  data: LoginPayload
): Promise<LoginResponse> {
    console.log(API_URL)
  const response = await fetch(`${API_URL}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error(response.body)
  }

  return response.json();
}

export type RegisterPayload = {
  username: string,
  email: string;
  password: string;
}

export type RegisterResponse = {
  session_id: string;
  user: {
    id: string;
    username: string;
  };
};

export async function registerUser(
  data: RegisterPayload
): Promise<RegisterResponse> {
    console.log(API_URL)
  const response = await fetch(`${API_URL}/api/v1/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error(response.body)
  }

  return response.json();
}