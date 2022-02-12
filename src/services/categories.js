import axios from "axios";
import { API_BASE_URL } from "./index";


export async function deleteCategory(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}

export async function getAllCategories() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/categories`)
    .catch((error) => error);
}

