import { getEnvironment } from "@/environment";
import BaseAPI from "./api";
import type { UserI } from "@/interfaces/User.interface";

const endpoint = "usuarios";
const API = BaseAPI?.axiosInstance;

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
export const usersGetCompany = async (
  search_term: string,
  pagina: string,
  empresa: string
) => {
  const response = await API.get(`${getEnvironment().baseUrl}${endpoint}`, {
    headers: getTokenHeaders(),
    params: {
      search_term,
      pagina,
      empresa,
    },
  }).then((res) => res);
  return response.data;
};

export const postRequestAccess = async (body: any) => {
  const response = await API.post(
    `${getEnvironment().baseUrl}${endpoint}/solicituds`,
    body,
    { headers: getTokenHeaders() }
  );
  return response;
};

export const getPointsByUser = () => {
  return API.get(
    `${getEnvironment().baseUrl}${endpoint}/points_by_user`,
    {
      headers: getTokenHeaders(),
      params: {},
    }
  ).then((res) => {
    return res.data});
  
};

export const getUsersByAmbassador = async () => {
  const response = await API.get(
    `${getEnvironment().baseUrl}usuario/total_users_by_embajador`,
    {
      headers: getTokenHeaders(),
      params: {},
    }
  ).then((res) => res);
  return response.data;
};

export const loginSSORequest = (email: string): Promise<{ token: string }> => {
  const headers = {
    username: email,
  };
  const currentEnv = getEnvironment();

  const response = API.post<{ token: string }>(
    `${currentEnv.baseUrl}${endpoint}/login_ssos`,
    { username: email },
    { headers }
  ).then((res) => res?.data);
  return response;
};

export const getUsersAndZones = () => {
  const currentEnv = getEnvironment();

  const response = API.get<{ token: string }>(
    `${currentEnv.baseUrl}${endpoint}/total_by_zone`,
    {
      headers: getTokenHeaders(),
      params: {},
    }
  ).then((res) => res?.data);
  return response;
};

export const getEventManagerUsers = () => {
  const currentEnv = getEnvironment();

  const response = API.get<{
    data: Array<UserI>;
    total: number;
  }>(`${currentEnv.baseUrl}${endpoint}/event_managers`, {
    headers: getTokenHeaders(),
    params: {},
  }).then((res) => res?.data);
  return response;
};

export const getUsersByEmbajador = async (action:string, ambassadorId:string) => {
  const response = await API.get(
    `${getEnvironment().baseUrl}${endpoint}/${action}/users_by_embajadors/${ambassadorId}`,
    {
      headers: getTokenHeaders(),
      params: {
        action,
        ambassadorId
      },
    }
  ).then((res) => res);
  return response.data;
};

export const searchUsers = async (searchTerm: string) => {
  const response = await API.get(
    `${getEnvironment().baseUrl}${endpoint}/${searchTerm}/search`,
    {
      headers: getTokenHeaders(),
      params: {
       // page,
       // limit,
      },
    }
  ).then((res) => res);
  return response.data;
};
export const createUserRequest = async (user: any) => {
  const response = await API.post(
    `${getEnvironment().baseUrl}${endpoint}/solicituds`,
    user,
    { headers: getTokenHeaders() }
  );
  return response.data;
};