import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (payload: any) => ({
        url: "/user/update-my-profile",
        method: "PATCH",
        data: payload,
        contentType: "multipart/form-data",
      }),

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery, useUpdateMyProfileMutation } = userApi;
