import axios from "axios";

const APIKEY = 'a5cf886a8dd84801a01c8b5bd0da1b0d';

const HttpService = {
  fetchNews: (query) => {
    return axios.get(`https://newsapi.org/v2/everything?apiKey=${APIKEY}&q=${query}`)
  }
}

export default HttpService;