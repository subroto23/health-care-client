"use server";

type TPayload = {
  email: string;
  password: string;
};

export const loginUser = async (data: TPayload) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const response = await res.json();
  return response;
};
