import axios from "axios";

const errorApi = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "https://httpstat.us/",
  timeout: 60000,
});

errorApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      return new Promise((_, reject) => reject(error));
    }
  }
);

export default errorApi;
