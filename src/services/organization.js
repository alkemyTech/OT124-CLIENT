import axios from 'axios';
import { API_BASE_URL }  from './index';

export async function getOrganizationData(organizationId) {
    // Returns JSON: { name, image, phone, address, welcomeText, socials }
    return await axios
        .get(`${API_BASE_URL}/api/v1/organizations/${organizationId}/public`)
        .catch(error => error);
}

const organizationService = {
    getOrganizationData
}

export default organizationService;