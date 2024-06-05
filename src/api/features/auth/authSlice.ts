import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setTokens: (state, action) => {
      const { user } = action.payload;
      state.user = user;

      // to save the username as a cookie
      Cookies.set("user", user.name, { httpOnly: false });
    },
  },
});

export const { setTokens } = authSlice.actions;

export default authSlice.reducer;

