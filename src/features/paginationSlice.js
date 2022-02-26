import { createSlice } from "@reduxjs/toolkit";
const size = 5

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 0,
    size: size,
  },
  reducers: {
    increasePage: (state, action) => {
      state.page += 1
    },
    increaseSize: (state, action) => {
      return (state.size += size);
    },
    decreseSize: (state, action) => {
      return (state.size -= size);
    },
    decresePage: (state, action) => {
      state.page -= 1
    },
    setPage: (state, action) => {
        state.page =  parseInt(action.payload)
      },
    initial: (state, action) => {
      state.page = 0;
      state.size = size;
    },
  },
});

export const { increasePage, increaseSize, decresePage, decreseSize, setPage, initial } =
  paginationSlice.actions;

export const selectPage = (state) => state?.pagination?.page;
export const selectSize = (state) => state?.pagination?.size;

export default paginationSlice.reducer;
