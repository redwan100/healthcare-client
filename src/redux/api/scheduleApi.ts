import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),

      invalidatesTags: [tagTypes.schedule],
    }),

    getAllSchedule: build.query({
      query: (args) => ({
        url: "/schedule",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: [], meta: TMeta) => ({
        schedules: response,
        meta,
      }),

      providesTags: [tagTypes.schedule],
    }),

    deleteSchedule: build.mutation({
      query: (id: string) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllScheduleQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
