import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";


export async function postContact(name, email, phone, message) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/contacts`, {
      name,
      email,
      phone,
      message,
    })
    .catch((error) => error);
}