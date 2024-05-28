import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const useApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //Get Me
    getSingleUser: build.query({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
      }),
      providesTags: [TagTypes.USER],
    }),
  }),
});

export const { useGetSingleUserQuery } = useApi;
