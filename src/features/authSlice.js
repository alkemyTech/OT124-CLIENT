import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: JSON.parse(localStorage.getItem("userData") || null),
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(state?.userData));
      const token = state.userData?.token
      axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
    },
    deleteUserData: (state) => {
      localStorage.removeItem("userData");
      state.userData = null;
      axios.defaults.headers.common["Authorization"] = null;
    },
  },
});

export const { setUserData, deleteUserData } = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;

export default authSlice.reducer;
