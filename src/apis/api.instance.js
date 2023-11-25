import axios from "axios";

//const apiBaseUrl = process.env.VITE_APP_BASE_URL;

export const instance = axios.create({
  //baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {},
});
