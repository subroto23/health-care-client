import { TMeta } from "@/interfaces";
import { baseApi } from "./baseApi";
import { TagTypes } from "../tagTypes/tagTypes";

export type TScheduleResponse = {
  meta: TMeta;
  data: {
    id: string;
    startData: string;
    endDate: string;
    startTime: string;
    endTime: string;
  }[];
};

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedules/create-schedule",
        method: "POST",
        data,
        contentType: "application/json",
      }),
      invalidatesTags: [TagTypes.SCHEDULE],
    }),

    //Get All
    getAllSchedule: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedules",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TScheduleResponse) => {
        return {
          schedules: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: [TagTypes.SCHEDULE],
    }),

    //Delete
    deleteSchedule: build.mutation({
      query: ({ id }) => ({
        url: `/schedules/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.SCHEDULE],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllScheduleQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
