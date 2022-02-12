import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";
const token = localStorage.getItem("userData")
axios.defaults.headers.common["Authorization"] = token ? `Bearer ${token}` : null;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: token ? decodeToken(token)?.user : null,
  },
  reducers: {
    setUserData: (state, action) => {
        const {token} = action.payload
        const decoded = decodeToken(token)
        console.log(decoded)
        const {user} = decoded
        state.userData = user;  
        localStorage.setItem("userData", token);
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
