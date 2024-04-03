import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: localStorage.getItem("accessToken")
      ? "Bearer " + localStorage.getItem("accessToken")
      : undefined,
    "x-refresh": localStorage.getItem("refreshToken"),
  },
});

export default server;
