import { baseApi } from "./baseApi";
import { TagTypes } from "../tagTypes/tagTypes";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/reviews/create-review",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.REVIEW],
    }),

    //Get All Review
    getAllReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/reviews",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.REVIEW],
    }),

    //Get My Review
    getMyReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/reviews/my-review",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.REVIEW],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetMyReviewsQuery,
} = reviewApi;
