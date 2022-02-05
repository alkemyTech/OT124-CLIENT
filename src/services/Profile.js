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

export async function profileDelete(email) {
    return await axios
      .delete(`${API_BASE_URL}/api/v1/users/deleteUser`, { // `${API_BASE_URL}/api/v1/user|profile/`
        email
      })
      .catch((error) => error);
  }
