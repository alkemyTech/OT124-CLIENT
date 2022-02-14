import axios from "axios";
import { API_BASE_URL } from "./index";


export async function getAllMembers() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/members`)
    .catch((error) => error);
}