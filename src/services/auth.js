import axios from "axios";
import { API_BASE_URL } from "./index";

export async function logIn(email, password) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/auth/login`, {
      email,
      password,
    })
    .catch((error) => error);
}

export async function signUp(firstName, lastName, email, password) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    })
    .catch((error) => error);
}
