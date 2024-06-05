import { apiSlice } from "@/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: credentials.userType === "user" ? "/user/login" : "/admin/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signUp: builder.mutation({
      query: (userData) => {
        return {
          url: userData.userType === "user" ? "/user/signup" : "/admin/signup",
          method: "POST",
          body: userData,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
