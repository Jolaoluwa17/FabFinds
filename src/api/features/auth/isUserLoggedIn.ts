import { apiSlice } from "@/api/apiSlice";

export const isUserLoggedIn = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    isLoggedIn: builder.query({
      query: () => {
        return "/user/me";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useIsLoggedInQuery } = isUserLoggedIn;
