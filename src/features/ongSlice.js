import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrganizationData } from '../services/organization';

export const fetchOngData = createAsyncThunk(
  'ong/fetchOngData',
  async (arg, thunkAPI) => {
    try {
      const response = await getOrganizationData(1);

      if (response.status === 200) return response.data;
    } catch(err) {
      console.log(err);
    }
  }
)


export const ongSlice = createSlice({
  name: "ong",
  initialState: {
    ongData: {
      address: '',
      email: '',
      image: '',
      name: '',
      phone: '',
      socials: {},
      welcomeText: ''
    }
  },
  reducers: {
    editOngWelcomeText: (state, action) => {
      state.ongData.welcomeText = action.payload;
    }
  },
  extraReducers: {
    [fetchOngData.fulfilled]: (state, action) => {
      state.fetchError = false;
      state.isLoading = false;

      state.ongData = action.payload;
    }
  }
});



export const { 
  editOngWelcomeText
} = ongSlice.actions;

export const selectOngData = state => state?.ong?.ongData;
export const selectWelcomeText = state => state?.ong?.ongData?.welcomeText;

export default ongSlice.reducer;
