import { authStorageSaveKey } from "@/components/constants/globalConstants";
import {
  getFromLocalStorage,
  localStoreSaveInfo,
  removeUserToLocalStorage,
} from "@/utlis/localStorage";
import { jwtDecode } from "jwt-decode";

export const storedUserInfo = (accessToken: string) => {
  const stroeLocalStorage = localStoreSaveInfo(authStorageSaveKey, accessToken);
  return stroeLocalStorage;
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authStorageSaveKey);
  if (!token) {
    return "";
  }
  const decoded: any = jwtDecode(token);
  return {
    ...decoded,
    role: decoded?.role.toLowerCase(),
  };
};

export const isLoggedIn = () => {
  const token = getFromLocalStorage(authStorageSaveKey);
  if (token) {
    return !!token;
  }
};

export const removeUser = () => {
  return removeUserToLocalStorage(authStorageSaveKey);
};
