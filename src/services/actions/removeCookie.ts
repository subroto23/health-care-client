"use server";
import { cookies } from "next/headers";

export const removeCookies = (keys: string[]) => {
  const cookieStore = cookies();
  keys?.forEach((key) => {
    cookieStore.delete(key);
  });
};
