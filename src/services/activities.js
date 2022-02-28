import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";

export async function getActivity(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities/${id}`)
    .catch((error) => console.log(error));
}

export async function createActivities(data) {
  const formData = createMultiForm(data);
  return await axios
    .post(`${API_BASE_URL}/api/v1/activities`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => console.log(error));
}

export async function updateActivities(id, activity) {
  const formData = createMultiForm(activity);
  return await axios
    .put(`${API_BASE_URL}/api/v1/activities/${id}`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => console.log(error));
}

export async function getAllActivities(queries='') {
  return await axios
    .get(`${API_BASE_URL}/api/v1/activities${queries}`)
    .catch((error) => console.log(error));
}

export async function deleteActivities(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/activities/${id}`)
    .catch((error) => console.log(error));
}
