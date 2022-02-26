import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: ''
  },
  reducers: {
    setSearch: (state, action) => {
        state.search = action.payload
    },
  },
});

export const { setSearch } =
  searchSlice.actions;

export const selectSearch = (state) => state?.search?.search;

export default searchSlice.reducer;