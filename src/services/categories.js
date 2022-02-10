import axios from "axios";
import { API_BASE_URL } from "./index";
axios.defaults.headers.common["Authorization"] = 'Bearer '+JSON.parse(localStorage.getItem('userData'))?.token;


export async function deleteCategorie(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}

export async function createCategory(category) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/categories`, category)
    .catch((error) => error);
}

export async function updateCategory(category, id) {
  return await axios
    .put(`${API_BASE_URL}/api/v1/categories/${id}`, category)
    .catch((error) => error);
}

export async function getCategory(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}