import axios from "axios";

const api = axios.create({
  baseURL: "https://webp-y7mb.onrender.com/api",
});

export default api;
