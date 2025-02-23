import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const shopsApiSlice = createApi({
  reducerPath: "shops",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/admin/shop/`,
  }),

  endpoints: (builder) => ({
    // Get All Shops
    getAllShops: builder.query({
      query: ({pageNum = 1, pageSize = 10 }) => ({
        url: `?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // Get Single Shop
    getSingleShop: builder.query({
      query: (sellerUid) => ({
        url: `${sellerUid}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // Get All verification Requests
    getVerificationRequests: builder.query({
      query: ({ pageNum = 1, pageSize = 10 }) => ({
        url: `verification/request?pageNum=${pageNum}&pageSize=${pageSize}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // Get All verification Requests
    getSellerVerificationRequest: builder.query({
      query: (shopUid) => ({
        url: `${shopUid}/verification/request`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // User status change
    verifyShop: builder.mutation({
      query: ({ shopUid, typeOfVerification = "VERIFY" }) => ({
        url: `${shopUid}/verification/status/${typeOfVerification}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),

    // Shop active and inactive
    activeAndInactiveShop: builder.mutation({
      query: ({ shopUid, isActive = true }) => ({
        url: `${shopUid}/active/${isActive}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllShopsQuery,
  useGetSingleShopQuery,
  useGetVerificationRequestsQuery,
  useVerifyShopMutation,
  useGetSellerVerificationRequestQuery,
  useActiveAndInactiveShopMutation,
} = shopsApiSlice;
