import axios from "axios";
import { CurrentUser } from "src/types/AuthenticationTypes";

const path = "http://localhost:5000/authentication";

export const restApi = axios.create({
  baseURL: path,
  withCredentials: true,
});

restApi.interceptors.request.use(
  function (config: any) {
    config.headers.withCredentials = true;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const login = (data: any): Promise<CurrentUser> => {
  return restApi
    .post("/login", data)
    .then((response) => response.data as CurrentUser);
};

export const register = (data: any): Promise<string> => {
  return restApi
    .post("/register", data)
    .then((response) => response.data as string);
};

export const getCurrentUser = (): Promise<CurrentUser> => {
  return restApi
    .get("/current-user")
    .then((response) => response.data as CurrentUser);
};

export const logout = (): Promise<string> => {
  return restApi.post("logout").then((response) => response.data as string);
};
