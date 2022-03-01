import { API_BASE_URL } from "./index";
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

const slidesService = {
    getAllSlides,
};
  
export default slidesService;
