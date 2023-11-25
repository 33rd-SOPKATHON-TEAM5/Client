import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_APP_BASE_URL;

export const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
