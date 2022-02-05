import axios from "axios";
import { API_BASE_URL } from "./index";

export async function getNewsById() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/auth/login`, {   })
    .catch((error) => error);
}
