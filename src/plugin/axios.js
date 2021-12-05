import axios from "axios";

const apiRequest = axios.create({
  baseURL: `${env.VUE_APP_API_BASE_URL}`,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

const auth_token = localStorage.getItem("token");
if(auth_token){
  apiRequest.defaults.headers.common["Authorization"] = "Bearer " + auth_token;
}

apiRequest.interceptors.request.use(function (config) {
  config.headers.Authorization = !!window.localStorage.getItem("token") ? "Bearer " + window.localStorage.getItem("token") : ''
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default apiRequest;


