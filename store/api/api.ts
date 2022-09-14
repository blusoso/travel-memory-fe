import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const user = localStorage.getItem("profile");

  if (user && req.headers) {
    req.headers.authorization = `Bearer ${JSON.parse(user).token}`;
  }

  return req;
});
