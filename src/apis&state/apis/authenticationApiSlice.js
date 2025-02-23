import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { adminAccessTokenValue } from "../../utils/authTokens";

export const authenticationApiSlice = createApi({
  reducerPath: "userAuth",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_AUTH_URL}/api/v1/admin/auth/`,
  }),

  endpoints: (builder) => ({
    // Signup Api
    signupApi: builder.mutation({
      query: (signupData) => ({
        url: "on_board/sub_admin",
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: signupData,
      }),
    }),

    // Login Api
    loginApi: builder.mutation({
      query: (loginData) => ({
        url: "admin_user/login",
        method: "POST",
        body: loginData,
      }),
    }),

    // Verify Otp Api
    verifyOtpApi: builder.mutation({
      query: (verifyOtpData) => ({
        url: "otp/verify",
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: verifyOtpData,
      }),
    }),

    // Resend Otp Api
    resendOtpApi: builder.mutation({
      query: (resendOtpData) => ({
        url: "otp/resend",
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminAccessTokenValue()}`,
        },
        body: resendOtpData,
      }),
    }),
  }),
});

export const {
  useSignupApiMutation,
  useLoginApiMutation,
  useVerifyOtpApiMutation,
  useResendOtpApiMutation,
} = authenticationApiSlice;
