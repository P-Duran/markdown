import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

client.interceptors.request.use(
  function (config: any) {
    config.headers.withCredentials = true;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
