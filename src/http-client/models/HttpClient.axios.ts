/* eslint-disable no-console */
// file: src/http-client/models/HttpClient.axios.ts

import axios, { type AxiosRequestConfig } from "axios";

import { type IHttpRequestParams } from "./HttpRequestParams.interface";
import { type IHttpClient } from "./HttpClient.interface";
import { HttpRequestType } from "./HttpRequestType.enum";
import { UrlUtils } from "./UrlUtils";

import { type IHttpClientConfig } from "../../app-config/models/AppConfig.interface";

/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 * and simplify replacement in the future if such npm package would stop being developed or other reasons
 */
export class HttpClientAxios implements IHttpClient {
  private _httpClientConfig?: IHttpClientConfig;

  constructor(httpClientConfig?: IHttpClientConfig) {
    this._httpClientConfig = httpClientConfig;
    // OPTIONAL for now: Add request interceptor to handle errors or other things for each request in one place
  }

  private getJwtToken(): string {
    const token =
      localStorage.getItem(
        this._httpClientConfig?.tokenKey || "my-app-token"
      ) || "";
    return token;
  }

  /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc)
   * based on the parameters argument.
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async.
   */
  async request<R, P = void>(parameters: IHttpRequestParams<P>): Promise<R> {
    // use destructuring to extract our parameters into local variables
    const { requestType, url, requiresToken, payload, headers } = parameters;

    // use helper to build the fullUrl with request parameters derived from the payload
    const fullUrl = UrlUtils.getFullUrlWithParams(url, payload as any);
    console.log("HttpClient: fullUrl: ", fullUrl, payload);

    // set axios options
    const options: AxiosRequestConfig = {
      headers: {},
    };

    if (headers) {
      options.headers = {
        ...options.headers,
        ...headers,
      };
    }

    // set headers Authorization
    if (requiresToken && options.headers) {
      // set the Authorization header with a bearer token
      options.headers.Authorization = `Bearer ${this.getJwtToken()}`;
    }

    let result!: R;

    try {
      switch (requestType) {
        // executes a get request:
        case HttpRequestType.get: {
          const response = await axios.get(fullUrl, options);
          result = response?.data as R;
          break;
        }

        // executes a post request:
        case HttpRequestType.post: {
          const response = await axios.post(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }

        // executes a put request:
        case HttpRequestType.put: {
          const response = await axios.put(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }

        // executes a delete request:
        case HttpRequestType.delete: {
          const response = await axios.delete(fullUrl, options);
          result = response?.data as R;
          break;
        }

        default: {
          console.warn(
            "HttpClient: invalid requestType argument or request type not implemented"
          );
        }
      }
    } catch (e) {
      // console.error('HttpClient exception', e)
      /*
      if (process.env.JEST_WORKER_ID === undefined) {
        throw Error('HttpClient exception');
      }
        */
    }

    return result;
  }
}
