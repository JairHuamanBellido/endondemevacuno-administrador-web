import axios from "axios";
const API_REST_ENDPOINT_BASE = "http://fake-endpoint:3001";
const HttpRestApi = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
});

const HttRestApiWithInterceptor = axios.create({
  baseURL: API_REST_ENDPOINT_BASE,
});

HttRestApiWithInterceptor.interceptors.request.use((request: any) => {
  request.headers.Authorization = `Bearer ${
    localStorage.getItem("token") as string
  }`;
  return request;
});

export { HttpRestApi, HttRestApiWithInterceptor };
