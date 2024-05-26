import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const specialitiesAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecility: build.mutation({
      query: (data) => ({
        url: "/specialities/create-speciality",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.SPECILITY],
    }),
    //Get
    getAllSpecility: build.query({
      query: () => ({
        url: "/specialities",
        method: "GET",
      }),
      providesTags: [TagTypes.SPECILITY],
    }),
    //Delete
    deleteSpecility: build.mutation({
      query: ({ id }) => ({
        url: `/specialities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.SPECILITY],
    }),
  }),
});

export const {
  useCreateSpecilityMutation,
  useGetAllSpecilityQuery,
  useDeleteSpecilityMutation,
} = specialitiesAPi;
