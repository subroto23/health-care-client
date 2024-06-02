import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";

export const loginUser = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const response = await res.json();
  // Server Protected Routes
  if (response?.success === true) {
    setAccessToken(response?.data?.accessToken, { redirect: "/dashboard" });
  }

  return response;
};
