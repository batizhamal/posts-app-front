import axios from "axios";

const api = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:8080/api/",
  timeout: 60000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 412) {
      return new Promise((_, reject) => reject(error));
    }
  }
);

export default api;
