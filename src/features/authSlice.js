import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";
const token = localStorage.getItem("userData")
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: token ? decodeToken(token)?.user : null,
    isExpired: token ? isExpired(token) : false
  },
  reducers: {
    setUserData: (state, action) => {
        const {token} = action.payload
        const decoded = decodeToken(token)
        const {user} = decoded
        state.userData = user;  
        localStorage.setItem("userData", token);
        axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;
    },
    deleteUserData: (state) => {
      localStorage.removeItem("userData");
      state.userData = null;
      state.isExpired = false
      axios.defaults.headers.common["Authorization"] = null;
    },
    setIsExpired: (state) => {
      const token = localStorage.getItem("userData")
      state.isExpired = token ? isExpired(token) : false
    }
  },
});

export const { setUserData, deleteUserData, setIsExpired } = authSlice.actions;

export const selectUserData = (state) => state.auth.userData;

export const selectIsExpired = (state) => state.auth.isExpired;

export default authSlice.reducer;
