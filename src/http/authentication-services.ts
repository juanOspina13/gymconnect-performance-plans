import type { LoginUser, LogoutRequestBody } from "@/models/auth/loginUser";
import BaseAPI from "./api";
import { getEnvironment } from "@/environment";

const globalHeaders = {
  "Content-Type": "application/json",
};

const getTokenHeaders = () => {
  let unparsedToken = localStorage.getItem("user-token");
  if (!unparsedToken) {
    unparsedToken = " ";
  }
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(unparsedToken)}`,
  };
};

const endpoint = "usuario";
const API = BaseAPI?.axiosInstance;

export const loginRequest = (user: LoginUser): Promise<{ token: string }> => {
  const headers = {
    username: user.username,
    "X-Password": user.password,
    ...globalHeaders,
  };
  const currentEnv = getEnvironment();

  const response = API.post<{ token: string }>(
    `${currentEnv.baseUrl}login`,
    user,
    { headers }
  ).then((res) => res?.data);
  return response;
};

export const getUserProfile = async () => {
  const currentEnv = getEnvironment();

  const response = await API.get(
    `${currentEnv.baseUrl}${endpoint}/current/user`,
    {
      headers: getTokenHeaders(),
    }
  ).then((res) => res);
  return response.data;
};

export const refreshToken = async (requestBody: URLSearchParams) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const currentEnv = getEnvironment();
  const response = await API.post(
    `${currentEnv.baseUrl}access_token`,
    requestBody,
    { headers }
  ).then((res) => res);
  return response;
};

export const logout = async (requestBody: LogoutRequestBody) => {
  const headers = {
    ...globalHeaders,
    iPlanetDirectoryPro: localStorage.getItem("token-id"),
  };
  const currentEnv = getEnvironment();
  const response = await API.post(
    `${currentEnv.baseUrl}token/revoke`,
    requestBody,
    { headers }
  ).then((res) => res);
  return response;
};
