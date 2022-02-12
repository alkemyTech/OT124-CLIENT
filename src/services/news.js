import React from "react";
import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";


export async function getAllNews() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/news`, {})
    .catch((error) => error);
}

export async function getNew(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/news/${id}`)
    .catch((error) => error);
}

export async function createNew(newToCreate) {
  const formData = createMultiForm(newToCreate);
  return await axios
    .post(`${API_BASE_URL}/api/v1/news`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function updateNew(newToUpdate, id) {
  const formData = createMultiForm(newToUpdate);
  return await axios
    .put(`${API_BASE_URL}/api/v1/news/${id}`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function deleteNew(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/news/${id}`)
    .catch((error) => error);
}