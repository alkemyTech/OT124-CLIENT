import axios from "axios";
import { API_BASE_URL } from "./index";

const baseURL = `${API_BASE_URL}/api/v1/auth/login`;

export async function logIn(email, password) {
  try {
    const { data } = await axios.post(baseURL, {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function signUp(firstName, lastName, email, password) {
  try {
    const { data } = await axios.post(baseURL, {
      firstName,
      lastName,
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
}
