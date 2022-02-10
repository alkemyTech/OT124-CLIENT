import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: JSON.parse(localStorage.getItem("userData")) || null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.userData));
    },
    deleteUserData: (state) => {
      localStorage.removeItem("userData");
      state.userData = null;
    },
  },
});

export const { setUserData, deleteUserData } = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;

export default authSlice.reducer;
