import axios from 'axios'
const SERVER_DOMAIN = process.env.HOST;
const AuthorizationToken = "crazytokenexample";
const getFun = () => {
    return {
        headers: {
            Authorization: AuthorizationHeader,
        }
    };
};
const postFun = (body) => {
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
            const response = await axios.get(`${SERVER_DOMAIN}${url}`, getFun());
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
        const response = await axios.post(`${SERVER_DOMAIN}${url}`, postFun(body));
        dispatch({
            type,
            payload:response
        })
    } catch (err) {
        return handleError(err);
    }
};