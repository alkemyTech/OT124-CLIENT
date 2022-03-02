import { API_BASE_URL, createMultiForm } from "./index";
import axios from "axios";

export async function getSlide(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/slides/${id}`)
    .catch((error) => error);
}

export async function createSlide(slide) {
  const formData = createMultiForm(slide);
  return await axios
    .post(`${API_BASE_URL}/api/v1/slides`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function deleteSlide(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/slides/${id}`)
    .catch((error) => console.log(error));
}

export async function getAllSlides(queries = "") {
  try {
    return await axios
      .get(`${API_BASE_URL}/api/v1/slides${queries}`)
      .catch((error) => error);
  } catch (err) {
    console.error(err);
  }
}

export async function updateSlide(slide, id) {
  const formData = createMultiForm(slide);
  return await axios
    .put(`${API_BASE_URL}/api/v1/slides/${id}`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

const slidesService = {
  getAllSlides,
  updateSlide,
  getSlide,
  deleteSlide,
  createSlide
};

export default slidesService;
