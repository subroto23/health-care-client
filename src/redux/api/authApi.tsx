import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const authAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.AUTH],
    }),

    //Forgotten Password
    forgottenPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.AUTH],
    }),

    //reset Password
    resetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.AUTH],
    }),
  }),
});

export const {
  useChangePasswordMutation,
  useForgottenPasswordMutation,
  useResetPasswordMutation,
} = authAPi;
