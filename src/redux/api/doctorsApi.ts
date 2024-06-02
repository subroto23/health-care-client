import { TMeta } from "@/interfaces";
import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";
import { TResponseDoctors } from "@/app/(withDashboard)/dashboard/admin/doctors/doctoraType";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/users/create-doctor",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.DOCTORS],
    }),

    //Get All
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctors",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TResponseDoctors[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [TagTypes.DOCTORS],
    }),

    //Get Single Doctors
    getSingleDoctors: build.query({
      query: ({ id }) => ({
        url: `/doctors/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.DOCTORS],
    }),

    //Delete
    deleteDoctors: build.mutation({
      query: ({ id }) => ({
        url: `/doctors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.DOCTORS],
    }),
    //Delete
    updateDoctorInfo: build.mutation({
      query: ({ doctorId, ...data }) => ({
        url: `/doctors/${doctorId}`,
        method: "PATCH",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.DOCTORS],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useGetSingleDoctorsQuery,
  useUpdateDoctorInfoMutation,
  useDeleteDoctorsMutation,
} = doctorApi;
