import { useMutation } from "react-query";
import server from "../server";
import { LoginFormData } from "@/forms/auth/LoginForm";

export function useLogUserIn() {
  async function logUserIn({ email, password }: LoginFormData) {
    return server
      .post("/sessions/login", { email, password })
      .then((response) => {
        const { accessToken, refreshToken } = response.data;

        localStorage.clear();

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        server.defaults.headers.common.Authorization = "Bearer " + accessToken;
        server.defaults.headers.common["x-refresh"] = refreshToken;

        return {
          accessToken: accessToken as string,
          refreshToken: refreshToken as string,
        };
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        server.defaults.headers.common.Authorization = "";
        server.defaults.headers.common["x-refresh"] = "";

        throw error;
      });
  }

  const {
    mutateAsync: signUserIn,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation(logUserIn);

  return { signUserIn, data, error, isLoading, isSuccess };
}

export function useRegisterUser() {
  async function registerUser({
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
        throw error;
      });
  }

  const {
    mutateAsync: signUserUp,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation(registerUser);

  return { signUserUp, data, error, isLoading, isSuccess };
}

export function useForgotPassword() {
  async function requestPasswordReset({ email }: { email: string }) {
    return server
      .post("/sessions/forgot-password", { email })
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: forgotPassword,
    error,
    isLoading,
    isSuccess,
  } = useMutation(requestPasswordReset);

  return { forgotPassword, error, isLoading, isSuccess };
}

export function useConfirmForgotPassword() {
  async function confirmPasswordReset({
    email,
    otp,
    password,
  }: {
    email: string;
    otp: number;
    password: string;
  }) {
    return server
      .post("/sessions/forgot-password-confirm", { email, otp, password })
      .then((response) => console.log(response))
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: confirmForgotPassword,
    error,
    isLoading,
    isSuccess,
  } = useMutation(confirmPasswordReset);

  return { confirmForgotPassword, error, isLoading, isSuccess };
}
