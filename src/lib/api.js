const API_BASE_URL = "";
const axios = require("axios");

export function getDatosPublicos() {
  axios
    .get(API_BASE_URL + "/organizations/1/public")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
