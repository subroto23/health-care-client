import { authStorageSaveKey } from "@/components/constants/globalConstants";
import {
  TErrorResponseDataFromServer,
  TResponseDataFromServer,
} from "@/interfaces";
import { getNewAccessToken } from "@/services/authService/auth.service";
import { getFromLocalStorage, localStoreSaveInfo } from "@/utlis/localStorage";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authStorageSaveKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObj: TResponseDataFromServer = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObj;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config = error?.config;
    if (error?.response?.status === 403 && !config.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      localStoreSaveInfo(authStorageSaveKey, accessToken);
      return await instance(config);
    } else {
      const responseObj: TErrorResponseDataFromServer = {
        statusCode: error?.response?.data?.statusCode || 5000,
        message: error?.response?.data?.message || "Something went wrong !!!",
        errorMessages: error?.response?.data?.message,
      };

      return responseObj;
    }
  }
);
export { instance };
