import axios from "axios";
import { GET_ORGANIZATION } from "../app/constants";
import { API_BASE_URL } from "./index";


export async function Organization(id) {
    // return await axios
    //   .get(`${API_BASE_URL}/api/v1/auth/login/${id}`)
    //   .catch((error) => error);
      return async function (dispatch) {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/v1/organizations/${id}/public`);
            dispatch({
                type:GET_ORGANIZATION,
                payload:response
            })
           
        } catch (err) {
            console.error(err)
            return handleError(err);
        }
    }
  }