import {
  authProtectedKey,
  authStorageSaveKey,
} from "@/components/constants/globalConstants";
import { removeCookies } from "./removeCookie";

export const logout = (router: any) => {
  localStorage.removeItem(authStorageSaveKey);
  removeCookies([authProtectedKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};
