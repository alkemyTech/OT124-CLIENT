import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    isLoggedIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("token", JSON.stringify(state.userData));
    },
    deleteUserData: (state) => {
      localStorage.removeItem("token");
      state.userData = null;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { setUserData, deleteUserData, logIn } = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
