import axios from "axios";
import { API_BASE_URL } from "./index";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiZXhhbXBsZTIwQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ0MjgxNjEzLCJleHAiOjE2NDQyODUyMTN9.IDPwL4FA7zOHp_Wd4_T32gRbWlErAR3iCukZViEvIr8";
axios.defaults.headers.common["Authorization"] = token;

export async function getActivity(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities/${id}`)
    .catch((error) => error);
}

export async function createActivities(data) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/activities`, data)
    .catch((error) => error);
}

export async function updateActivities(id, activity) {
  return await axios
    .put(`${API_BASE_URL}/api/v1/news/${id}`, activity)
    .catch((error) => error);
}

export async function getAllActivities() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities`)
    .catch((error) => error);
}
