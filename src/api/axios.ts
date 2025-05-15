// src/api/axios.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 如果需要携带 Cookie/token
});

export default apiClient;
