import axios from "axios";
import { API_BASE_URL } from "./index";

export async function getAllNews() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/news/getAllNews`, {})
    .catch((error) => error);
}