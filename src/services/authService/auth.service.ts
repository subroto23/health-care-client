import { authStorageSaveKey } from "@/components/constants/globalConstants";
import { instance } from "@/helpers/axios/axios.instance";
// import { instance as axiosInstance } from "@/helpers/axios/axios.instance";
import {
  getFromLocalStorage,
  localStoreSaveInfo,
  removeUserToLocalStorage,
} from "@/utlis/localStorage";
import Email from "@mui/icons-material/Email";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const storedUserInfo = (accessToken: string) => {
  const stroeLocalStorage = localStoreSaveInfo(authStorageSaveKey, accessToken);
  return stroeLocalStorage;
};

export const getUserInfo = () => {
  const token = getFromLocalStorage(authStorageSaveKey);
  if (!token) {
    return null;
  }
  try {
    const decoded: any = jwtDecode(token);
    return {
      ...decoded,
      role: decoded?.role.toLowerCase(),
    };
  } catch (error) {
    return { name: "", role: "" };
  }
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

export const getNewAccessToken = async () => {
  try {
    const newToken = await instance({
      url: `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/refresh-token`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return newToken;
  } catch (error) {
    console.log(error);
  }
};
