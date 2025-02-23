import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const usersApiSlice = createApi({
  reducerPath: "users",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/admin/user/`,
  }),

  endpoints: (builder) => ({
    // Get All Users
    getAllUsers: builder.query({
      query: ({ userType = "", pageNum = 1, pageSize = 10 }) => ({
        url: `?userType=${userType}&pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // Get Single User
    getSingleUser: builder.query({
      query: (userUid) => ({
        url: `${userUid}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // User status change
    changeUserStatus: builder.mutation({
      query: ({ userUid, isBlock, isTemp=true }) => ({
        url: `${userUid}/status?is_block=${isBlock}&is_temp=${isTemp}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useChangeUserStatusMutation,
} = usersApiSlice;
