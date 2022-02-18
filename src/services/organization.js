import axios from 'axios';
import { API_BASE_URL }  from './index';

export async function getOrganizationData(organizationId) {
    // Returns JSON: { name, image, phone, address, welcomeText, socials }
    return await axios
        .get(`${API_BASE_URL}/api/v1/organizations/${organizationId}/public`)
        .catch(error => error);
}
export async function getAllOrganizations() {
    
    return await axios
        .get(`${API_BASE_URL}/api/v1/organizations`).then((e)=>{
            return e
        })
        .catch(error => error);
}
export async function createOrganization(organizationId) {
  
    return await axios
        .post(`${API_BASE_URL}/api/v1/organizations/`)
        .catch(error => error);
}
export async function deleteOrganization(organizationId) {
  
    return await axios
        .delete(`${API_BASE_URL}/api/v1/organizations/${organizationId}`)
        .catch(error => error);
}

const organizationService = {
    getOrganizationData
}

export default organizationService;