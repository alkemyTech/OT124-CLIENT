import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiZXhhbXBsZTExQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjQ0MTkyNzg5LCJleHAiOjE2NDQxOTYzODl9.J2vMhC98OOOfNfNCimTYuUB8HRi5zfl7cL5FZ3EQTiM'
axios.defaults.headers.common['Authorization']= token


export async function getNew(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/news/${id}`)
    .catch((error) => error);
}

export async function createNew(newToCreate) {
    const formData = createMultiForm(newToCreate)
    return await axios
      .post(`${API_BASE_URL}/api/v1/news`, formData, {headers: formData.getHeaders})
      .catch((error) => error);
  }  

  export async function updateNew(newToUpdate, id) {
    const formData = createMultiForm(newToUpdate)
    return await axios
      .put(`${API_BASE_URL}/api/v1/news/${id}`, formData, {headers: formData.getHeaders})
      .catch((error) => error);
  }  