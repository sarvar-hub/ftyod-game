import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 180000,
});

export default request;
