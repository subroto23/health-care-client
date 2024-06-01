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

    //Update User Info
    updateUserInfo: build.mutation({
      query: (data) => ({
        url: "/users/update-profile",
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.USER],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateUserInfoMutation } = useApi;
