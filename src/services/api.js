import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org",
  apiKey: "api_key=08555db9f6be8fa06d4c47bc7e2d3335"
});

export default api;
