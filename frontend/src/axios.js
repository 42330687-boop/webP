import axios from "axios";

const api = axios.create({
  baseURL: "https://webp-y7mb.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
