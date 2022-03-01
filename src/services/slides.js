import { API_BASE_URL, createMultiForm } from "./index";
import axios from "axios";

export async function getAllSlides() {
  try {
    return await axios
      .get(`${API_BASE_URL}/api/v1/slides`)
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
    .catch(error => error);
}

const slidesService = {
  getAllSlides,
  updateSlide
};
  
export default slidesService;
