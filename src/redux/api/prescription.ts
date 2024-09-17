import { TagTypes } from "./../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const prescriptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPrescription: build.mutation({
      query: (data) => ({
        url: "/prescriptions/create-prescription",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.PRESCRIPTION, TagTypes.APPOINTMENT],
    }),

    //Get All
    getAllPrescription: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/prescriptions",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.PRESCRIPTION],
    }),

    //Get Single Prescriptions
    getSinglePrescription: build.query({
      query: ({ id }) => ({
        url: `/prescriptions/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.PRESCRIPTION],
    }),
    //Get My Prescriptions
    getMyPrescription: build.query({
      query: ({ id }) => ({
        url: `/prescriptions/my-prescription`,
        method: "GET",
      }),
      providesTags: [TagTypes.PRESCRIPTION],
    }),
  }),
});

export const {
  useCreatePrescriptionMutation,
  useGetMyPrescriptionQuery,
  useGetAllPrescriptionQuery,
  useGetSinglePrescriptionQuery,
} = prescriptionApi;
