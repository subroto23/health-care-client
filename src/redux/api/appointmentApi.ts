import { TagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAppointment: build.mutation({
      query: (data) => ({
        url: "/appointments/create-appointment",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.APPOINTMENT],
    }),

    //Get All
    getAllAppointment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/appointments",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.APPOINTMENT],
    }),

    //Get All
    getMyAppointment: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/appointments/my-appointment",
        method: "GET",
        params: arg,
      }),
      providesTags: [TagTypes.APPOINTMENT],
    }),

    //Update Status
    updateAppointmentStatus: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/appointments/status/${id}`,
        method: "PATCH",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.APPOINTMENT],
    }),
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetAllAppointmentQuery,
  useGetMyAppointmentQuery,
  useUpdateAppointmentStatusMutation,
} = appointmentApi;
