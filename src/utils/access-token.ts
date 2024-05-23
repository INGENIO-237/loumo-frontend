import server from "@/data/server";
import { AxiosResponse } from "axios";

export default function processNewAccessToken(response: AxiosResponse) {
  const newAccessToken = response.headers["x-access-token"];

  if (newAccessToken) {
    localStorage.setItem("accessToken", newAccessToken);
    server.defaults.headers.common.Authorization = "Bearer " + newAccessToken;
  }
}
