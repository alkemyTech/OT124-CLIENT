import { createSlice } from "@reduxjs/toolkit";


export const orgSlice = createSlice({
  name: "org",
  initialState: {

    allOrgs: [],
    messageDelete: {},
    createOngMsg: {},
    OngById: {}
  },
  reducers: {

    getAllOrgs: (state, action) => {
      return { ...state, allOrgs: action.payload }
    },
    deleteOrg: (state, action) => {
      return { ...state, messageDelete: action.payload }
    },
    cleanDeleteOrg: (state, action) => {
      return { ...state, messageDelete: {} }
    },
    createOrg: (state, action) => {
      return { ...state, createOngMsg: action.payload }
    },
    getOrgById: (state, action) => {
      return { ...state, OngById: action.payload }
    },
    cleanGetOrgById: (state, action) => {
      return { ...state, OngById: {} }
    },
  },
});



export const { 
  getAllOrgs,
  deleteOrg,
  cleanDeleteOrg,
  createOrg,
  getOrgById,
  cleanGetOrgById } = orgSlice.actions;

export const selectAllOrgsData = (state) => state?.org?.allOrgs;
export const selectDeleteOrgData = (state) => state?.org?.messageDelete;
export const selectCreateOrgData = (state) => state?.org?.createOngMsg;
export const selectGetOrgById = (state) => state?.org?.OngById;

export default orgSlice.reducer;
