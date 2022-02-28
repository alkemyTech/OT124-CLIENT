import axios from "axios";
import { API_BASE_URL, createMultiForm } from "./index";

export async function getOrganizationData(organizationId) {
  // Returns JSON: { name, image, phone, address, welcomeText, socials }
  try {
    return await axios
      .get(`${API_BASE_URL}/api/v1/organizations/${organizationId}/public`)
      .catch((error) => error);
  } catch (err) {
    console.error(err);
  }
}

export async function getAllOrganizations(queries = "") {
  try {
    return await axios.get(`${API_BASE_URL}/api/v1/organizations${queries}`);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteOrganization(organizationId) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/organizations/${organizationId}`)
    .catch((error) => error);
}

export async function postOrganization(newOrg) {
  const formData = createMultiForm(newOrg);
  return await axios
    .post(`${API_BASE_URL}/api/v1/organizations/`, formData, {
      headers: formData.getHeaders,
    })
    .catch((error) => error);
}

export async function editOrganization(uptOrg, id) {
  const formData = createMultiForm(uptOrg);

  return await axios
    .put(`${API_BASE_URL}/api/v1/organizations/${id}`, formData, {
      headers: formData.getHeaders,
    })

    .catch((error) => error);
}
const organizationService = {
  getOrganizationData,
  deleteOrganization,
};

export default organizationService;
