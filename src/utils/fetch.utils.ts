import { ApiMethods } from "@/constants";
import { axiosError } from "./error.utils";
import { errorLogger } from "./toast.utils";
import { BaseURL } from "@/helper/api/baseUrl";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import store from "../store"; // Adjust the import based on your project structure

type RecordIndex = {
  [key: string]: string;
};

export class FetchAPI {
  private url: string;
  private method: ApiMethods;
  private data: { [key: string]: any } = {};
  private headers: RecordIndex = {};
  private queryParams: RecordIndex = {};
  private token: string | null = null;

  constructor(url: string, method: ApiMethods = "GET") {
    this.url = `${BaseURL}${url}`;
    this.method = method;
  }

  setData(data: { [key: string]: any }): this {
    this.data = data;
    return this;
  }

  setHeaders(headers: RecordIndex): this {
    this.headers = headers;
    return this;
  }

  setQueryParams(queryParams: RecordIndex): this {
    this.queryParams = queryParams;
    return this;
  }

  // attachToken(token?: string): this {
  //   this.token = token || store.getState().auth.token; // Use store to get the token if none is provided
  //   if (this.token) {
  //     this.headers["Authorization"] = `Bearer ${this.token}`;
  //   }
  //   return this;
  // }

  async send<T>(): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      method: this.method,
      url: this.url,
      headers: this.headers,
      data: this.data,
      params: this.queryParams,
    };

    try {
      const data = await axios(config);
      return data;
    } catch (error: unknown) {
      const { response, message } = axiosError(error);
      errorLogger(message);
      return Promise.reject({ status: response?.status, message: message });
    }
  }
}
