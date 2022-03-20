import axios from "axios";
import { CurrentUser } from "src/types/AuthenticationTypes";
import {
  AUTHENTICATION_PATH,
  CURRENT_USER_PATH,
  LOGIN_PATH,
  LOGOUT_PATH,
  REGISTER_PATH,
} from "./paths";

const path = `${process.env.REACT_APP_API_BASE_URL}${AUTHENTICATION_PATH}`;

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
    .post(LOGIN_PATH, data)
    .then((response) => response.data as CurrentUser);
};

export const register = (data: any): Promise<string> => {
  return restApi
    .post(REGISTER_PATH, data)
    .then((response) => response.data as string);
};

export const getCurrentUser = (): Promise<CurrentUser> => {
  return restApi
    .get(CURRENT_USER_PATH)
    .then((response) => response.data as CurrentUser);
};

export const logout = (): Promise<string> => {
  return restApi.post(LOGOUT_PATH).then((response) => response.data as string);
};
