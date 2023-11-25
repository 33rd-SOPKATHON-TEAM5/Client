import axios from "axios";

const apiBaseUrl = "https://www.sopkathon-team5.p-e.kr/";

export const instance = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
