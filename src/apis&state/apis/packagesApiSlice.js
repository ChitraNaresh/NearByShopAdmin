import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const packagesApiSlice = createApi({
  reducerPath: "packages",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/admin/`,
  }),

  endpoints: (builder) => ({
    // Get all packages
    getAllPackages: builder.query({
      query: () => ({
        url: "package",
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      providesTags: ["Packages"],
    }),

    // Get single packages
    getSinglePackage: builder.query({
      query: (packageUid) => ({
        url: `package/${packageUid}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      providesTags: ["Packages"],
    }),

    // Create package
    createPackage: builder.mutation({
      query: (data) => ({
        url: `package`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Packages"],
    }),

    // Update package
    updatePackage: builder.mutation({
      query: ({ data, packageUid }) => ({
        url: `package/${packageUid}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Packages"],
    }),

    // Delete package
    deletePackage: builder.mutation({
      query: (packageUid) => ({
        url: `package/${packageUid}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      invalidatesTags: ["Packages"],
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useGetSinglePackageQuery,
  useCreatePackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,
} = packagesApiSlice;
