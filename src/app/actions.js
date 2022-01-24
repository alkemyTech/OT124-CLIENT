import axios from 'axios'
const SERVER_DOMAIN = process.env.HOST;
const AuthorizationToken = "crazytokenexample";
const getHeaders = () => {
    return {
        headers: {
            Authorization: AuthorizationHeader,
        }
    };
};
const postSomething = (body) => {
    return {
        headers: {
            Authorization: AuthorizationHeader,
            "Content-Type": "application/json"
        },
        data:body
    };
};

function handleError(err) {
    console.err(err)
}
// reusable HTTP requests

//put "type" in constants
const getSomething = async (type) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${SERVER_DOMAIN}${url}`, getHeaders());
            dispatch({
                type,
                payload:response
            })
           
        } catch (err) {
            return handleError(err);
        }
    }
};
const postSomething = async (type,body) => {
    try {
        const response = await axios.post(`${SERVER_DOMAIN}${url}`, postSomething(body));
        dispatch({
            type,
            payload:response
        })
    } catch (err) {
        return handleError(err);
    }
};