import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const globalApiSlice = createApi({
  reducerPath: "global",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/global/`,
  }),

  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: ({ data, type = "OTHER", itemUid = "" }) => ({
        url: `content/image?type=${type}${
          itemUid ? `&itemUid=${itemUid}` : ""
        }`,
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadImageMutation } = globalApiSlice;
