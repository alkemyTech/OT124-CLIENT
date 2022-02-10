import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";


export async function deleteCategorie(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}

