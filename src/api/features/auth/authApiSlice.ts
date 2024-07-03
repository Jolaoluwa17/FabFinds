import { apiSlice } from "@/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: credentials.userType === "user" ? "user/login" : "admin/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: userData.userType === "user" ? "user/signup" : "admin/signup",
        method: "POST",
        body: userData,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "forgotpassword/send-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "forgotpassword/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    verifyAccount: builder.mutation({
      query: (data) => ({
        url: "user/verify-account",
        method: "POST",
        body: data,
      }),
    }),
    sendVerifyEmail: builder.mutation({
      query: (data) => ({
        url: "user/send-verify-email",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyAccountMutation,
  useSendVerifyEmailMutation,
} = authApiSlice;
