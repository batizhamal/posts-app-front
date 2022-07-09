import axios from "axios";

const api = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "http://localhost:8080/api/",
  timeout: 60000,
});

export default api;
