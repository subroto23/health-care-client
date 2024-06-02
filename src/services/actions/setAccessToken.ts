"use server";
import {
  authProtectedKey,
  authStorageSaveKey,
} from "@/components/constants/globalConstants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const setAccessToken = (token: string, options?: any) => {
  cookies().set(authProtectedKey, token);

  if (options && options?.redirect) {
    redirect(options?.redirect);
  }
};
export default setAccessToken;
