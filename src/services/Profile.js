import axios from "axios";
import { API_BASE_URL } from "./index";

export async function profileUpdate(id, values) {
  return await axios
    .put(`${API_BASE_URL}/api/v1/users/self/${id}`, { 
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    })
    .catch((error) => error);
}

export async function profileDelete(id) {
    return await axios
      .delete(`${API_BASE_URL}/api/v1/users/${id}`, { // `${API_BASE_URL}/api/v1/user|profile/`
        id
      })
      .catch((error) => error);
}

export async function profileGetMine() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/auth/me`, { 
    })
    .catch((error) => error);
}

export async function awardsGetMe() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/donate/process-payment/user`, { 
    })
    .catch((error) => error);
}

  export default {
    profileUpdate,
    profileDelete,
    profileGetMine,
    awardsGetMe
  }