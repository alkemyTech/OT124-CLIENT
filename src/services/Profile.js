import axios from "axios";
import { API_BASE_URL } from "./index";

export async function profileUpdate(firstname, lastname, email) {
  return await axios
    .update(`${API_BASE_URL}/api/v1/users`, { // `${API_BASE_URL}/api/v1/user|profile/`
      firstname,
      lastname,
      email
    })
    .catch((error) => error);
}

export async function profileDelete(email) {
    return await axios
      .delete(`${API_BASE_URL}/api/v1/users`, { // `${API_BASE_URL}/api/v1/user|profile/`
        email
      })
      .catch((error) => error);
}

export async function profileGetMine() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/auth/me`, { 
    })
    .catch((error) => error);
}

  export default {
    profileUpdate,
    profileDelete,
    profileGetMine
  }