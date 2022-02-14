import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiZXhhbXBsZTIwQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ0MjgxNjEzLCJleHAiOjE2NDQyODUyMTN9.IDPwL4FA7zOHp_Wd4_T32gRbWlErAR3iCukZViEvIr8";
axios.defaults.headers.common["Authorization"] = token;

export async function getActivity(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities/${id}`)
    .catch((error) => console.log(error));
}

export async function createActivities(data) {
  const formData = createMultiForm(data);
  return await axios
    .post(`${API_BASE_URL}/api/v1/activities`, data, {
      headers: formData.getHeaders,
    })
    .catch((error) => console.log(error));
}

export async function updateActivities(id, activity) {
  const formData = createMultiForm(activity);
  return await axios
    .put(`${API_BASE_URL}/api/v1/activities/${id}`, activity, {
      headers: formData.getHeaders,
    })
    .catch((error) => console.log(error));
}

export async function getAllActivities() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities`)
    .catch((error) => console.log(error));
}

export async function deleteActivities(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/activities/${id}`)
    .catch((error) => console.log(error));
}
