const axios = require("axios");
const qs = require("querystring");

function getArticleList() {
  return axios
    .get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=u2fqK1DJaA4wTo8Vk84jghG64YAGPnkL"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
}
function search(value){
    return axios
    .get(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+value+"&api-key=u2fqK1DJaA4wTo8Vk84jghG64YAGPnkL"
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    });
}
export const service = {
  getArticleList,
  search
};
