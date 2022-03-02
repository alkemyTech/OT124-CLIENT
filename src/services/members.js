import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";


export async function getAllMembers(queries='') {
  return await axios
    .get(`${API_BASE_URL}/api/v1/members${queries}`)
    .catch((error) => error);
}

export async function getMember(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/members/${id}`)
    .catch((error) => error);
}

export async function createMember(memberToCreate) {
  const formData = createMultiForm(memberToCreate);
  return await axios
    .post(`${API_BASE_URL}/api/v1/members`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function updateMember(memberToUpdate, id) {
  const formData = createMultiForm(memberToUpdate);
  return await axios
    .put(`${API_BASE_URL}/api/v1/members/${id}`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function deleteMember(id) {  
    return await axios
      .delete(`${API_BASE_URL}/api/v1/members/${id}`)
      .catch((error) => error);
  }