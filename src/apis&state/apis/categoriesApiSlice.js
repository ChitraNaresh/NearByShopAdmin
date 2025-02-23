import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const categoriesApiSlice = createApi({
  reducerPath: "categories",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/admin/`,
  }),

  endpoints: (builder) => ({
    // Get all categories
    getAllCategories: builder.query({
      query: () => ({
        url: "category",
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      providesTags: ["Categories"],
    }),

    // Create category
    createCategory: builder.mutation({
      query: (data) => ({
        url: "category",
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Update category
    updateCategory: builder.mutation({
      query: ({ data, categoryUid }) => ({
        url: `category/${categoryUid}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Delete category
    deleteCategory: builder.mutation({
      query: (categoryUid) => ({
        url: `category/${categoryUid}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      invalidatesTags: ["Categories"],
    }),

    // Create sub category
    createSubCategory: builder.mutation({
      query: ({ data, categoryUid }) => ({
        url: `category/${categoryUid}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Update sub category
    updateSubCategory: builder.mutation({
      query: ({ data, categoryUid, subCategoryUid }) => ({
        url: `category/${categoryUid}/sub-category/${subCategoryUid}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: data,
      }),
      invalidatesTags: ["Categories"],
    }),

    // Delete sub category
    deleteSubCategory: builder.mutation({
      query: ({ categoryUid, subCategoryUid }) => ({
        url: `category/${categoryUid}/sub-category/${subCategoryUid}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useCreateSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,
} = categoriesApiSlice;
