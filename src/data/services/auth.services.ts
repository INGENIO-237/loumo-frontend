import server from "../server";

export async function loginUserIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return server
    .post("/sessions/login", { email, password })
    .then((response) => {
      const { accessToken, refreshToken } = response.data;

      localStorage.clear();

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      server.defaults.headers.common.Authorization = "Bearer " + accessToken;
      server.defaults.headers.common["x-refresh"] = refreshToken;

      return { accessToken, refreshToken };
    })
    .catch((error) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      server.defaults.headers.common.Authorization = "";
      server.defaults.headers.common["x-refresh"] = "";

      throw error;
    });
}

export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return server
    .post("/users", { email, password })
    .then((response) => response.data)
    .catch((error) => {
      console.log({ error });
    });
}
