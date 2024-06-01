import { TMeta } from "@/interfaces";
import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const doctorScheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctorSchedule: build.mutation({
      query: (data) => ({
        url: "/doctor-schedule/create-schedule",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.DOCTOR_SCHEDULE],
    }),

    //Get All
    getAllDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-schedule",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.DOCTOR_SCHEDULE],
    }),

    //Delete
    deleteDoctorsSchedule: build.mutation({
      query: ({ id }) => {
        return {
          url: `/doctor-schedule/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TagTypes.DOCTOR_SCHEDULE],
    }),
  }),
});

export const {
  useCreateDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
  useDeleteDoctorsScheduleMutation,
} = doctorScheduleApi;
