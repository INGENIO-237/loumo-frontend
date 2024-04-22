export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginReturnData = {
  accessToken: string;
  refreshToken: string;
};

export type ForgotPwdConfirmPayload = {
  email: string;
  otp: number;
  password: string;
}
