import { createSlice } from "@reduxjs/toolkit";


export const orgSlice = createSlice({
    name: "org",
    initialState: {

      allOrgs: [],
      messageDelete:{}
    },
    reducers: {
    
      getAllOrgs:(state,action) => {
        return {...state, allOrgs:action.payload }
      },
      deleteOrg:(state,action) => {
        return {...state, messageDelete:action.payload }
      },
      cleanDeleteOrg:(state,action) => {
        return {...state, messageDelete:{} }
      },
    },
  });
  


  export const {  getAllOrgs, deleteOrg, cleanDeleteOrg } = orgSlice.actions;
  
  export const selectAllOrgsData = (state) => state?.org?.allOrgs;
  export const selectDeleteOrgData = (state) => state?.org?.messageDelete;
  
  export default orgSlice.reducer;
  