import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    isLoggedIn: localStorage.getItem("isLoggedIn"),
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
      localStorage.setItem("isLoggedIn", true);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
    }
  },
});

export const { setUserData, deleteUserData } = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;

export default authSlice.reducer;
