import { getEnvironment } from "@/environment";
import BaseAPI from "./api";

const API = BaseAPI?.axiosInstance;
const endpoint = "transaccions";
/*
const getTokenHeaders = () => {
  let unparsedToken = localStorage.getItem("user-token");
  if (!unparsedToken) {
    unparsedToken = " ";
  }
  // You can return headers or token here if needed
};
*/

export const postSuscripcionMercadoPago = async (datosCompra: any) => {
  const response = await API.post(
    `${getEnvironment().baseUrl}${endpoint}/suscripcion_mercadopago_news`,
    datosCompra
  );
  return response.data;
};
