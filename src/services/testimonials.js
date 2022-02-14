import { API_BASE_URL, createMultiForm } from "./index";
import axios from "axios";

export async function getTestimonial(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/testimonials/${id}`)
    .catch((error) => error);
}

export async function createTestimonial(testimonial) {
  const formData = createMultiForm(testimonial);
  return await axios
    .post(`${API_BASE_URL}/api/v1/testimonials`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function updateTestimonial(testimonial, id) {
  const formData = createMultiForm(testimonial);
  return await axios
    .put(`${API_BASE_URL}/api/v1/testimonials/${id}`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function getTestimonials() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/testimonials/`)
    .catch((error) => console.log(error));
}
