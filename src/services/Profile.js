import axios from "axios";
import { API_BASE_URL } from "./index";

export async function profileUpdate(firstname, lastname, email) {
  return await axios
    .update(`${API_BASE_URL}/api/v1/users/updateUser`, { // `${API_BASE_URL}/api/v1/user|profile/`
      firstname,
      lastname,
      email
    })
    .catch((error) => error);
}

export async function profileDelete() {
    return await axios
      .delete(`${API_BASE_URL}/api/v1/users/deleteUser`, { // `${API_BASE_URL}/api/v1/user|profile/`
        // Pedir email del token
      })
      .catch((error) => error);
}

export async function profileGetMine() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/auth/getMe`, { 
    })
    .catch((error) => error);
}

  export default {
    profileUpdate,
    profileDelete,
    profileGetMine
  }