import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TagTypes, tagTypesValues } from "../tagTypes/tagTypes";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://health-care-taupe-eight.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesValues,
});
