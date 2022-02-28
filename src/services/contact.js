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

export async function getContacts(queries='') {
  return await axios
    .get(`${API_BASE_URL}/api/v1/contacts${queries}`)
    .catch((error) => console.log(error));
}

export async function deleteContacts(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/contacts/${id}`)
    .catch((error) => console.log(error));
}