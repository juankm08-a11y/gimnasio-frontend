import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:90/api",
});

export default api;
