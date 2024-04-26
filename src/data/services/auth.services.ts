import { useMutation } from "react-query";
import server from "../server";
import { LoginFormData } from "@/forms/auth/LoginForm";
import { ForgotPwdConfirmPayload } from "@/types/auth";
import { ShippingAddress } from "@/forms/auth/ProfileInfoForm";

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
      .then(() => email)
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: forgotPassword,
    data,
    error,
    isLoading,
    isSuccess,
  } = useMutation(requestPasswordReset);

  return { forgotPassword, data, error, isLoading, isSuccess };
}

export function useConfirmForgotPassword() {
  async function confirmPasswordReset({
    email,
    otp,
    password,
  }: ForgotPwdConfirmPayload) {
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

export function useUpdateProfile() {
  async function updateProfile(data: {
    email: string;
    phone: string;
    shippingAddress: ShippingAddress;
  }) {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return server
      .put("/users/profile", data, {
        headers: {
          Authorization: "Bearer " + accessToken,
          ["x-refresh"]: refreshToken,
        },
      })
      .catch((error) => {
        throw error;
      });
  }

  const {
    mutateAsync: profileUpdate,
    error,
    isLoading,
    isSuccess,
  } = useMutation(updateProfile);

  return { profileUpdate, error, isLoading, isSuccess };
}
