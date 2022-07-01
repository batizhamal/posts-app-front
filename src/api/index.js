import axios from "axios";

const api = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL: "https://dummyjson.com/",
  timeout: 60000,
});

export default api;
