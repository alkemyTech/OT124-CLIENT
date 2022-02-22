import { API_BASE_URL } from './index';
import axios from 'axios';

export async function getAllUsers() {
    // SEND: {
    //     users
    // }
    return await axios
        .get(`${API_BASE_URL}/api/v1/users`)
        .catch((error) => error);
}

export async function deleteUser(userId) {
    return await axios
        .delete(`${API_BASE_URL}/api/v1/users/${userId}`)
        .catch(error => error);
}

export async function getUser(userId) {
    return await axios
        .get(`${API_BASE_URL}/api/v1/users/${userId}`)
        .catch(error => error);
}

export async function updateUser(userId, user) {
    return await axios
        .put(`${API_BASE_URL}/api/v1/users/${userId}`, user)
        .catch(error => error);
}

const usersServices = {
    getAllUsers,
    deleteUser,
    getUser,
    updateUser
}

export default usersServices;