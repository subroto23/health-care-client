import { TMeta } from "@/interfaces";
import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";
import { TResponseDoctors } from "@/app/(withDashboard)/dashboard/admin/doctors/doctoraType";

const patientAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPatient: build.mutation({
      query: (data) => ({
        url: "/users/create-doctor",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [TagTypes.PATIENTS],
    }),

    //Get All
    getAllPatients: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/patients",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TResponseDoctors[], meta: TMeta) => {
        return {
          patients: response,
          meta,
        };
      },
      providesTags: [TagTypes.PATIENTS],
    }),

    //Get Single Doctors
    getSinglePatients: build.query({
      query: ({ id }) => ({
        url: `/patients/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.PATIENTS, TagTypes.USER],
    }),

    //Delete
    deletePatients: build.mutation({
      query: ({ id }) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.PATIENTS],
    }),
    //Update
    updatePatientsrInfo: build.mutation({
      query: ({ patientId, ...data }) => ({
        url: `/patients/${patientId}`,
        method: "PATCH",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.PATIENTS],
    }),
  }),
});

export const {
  useCreatePatientMutation,
  useGetAllPatientsQuery,
  useGetSinglePatientsQuery,
  useDeletePatientsMutation,
  useUpdatePatientsrInfoMutation,
} = patientAPi;
