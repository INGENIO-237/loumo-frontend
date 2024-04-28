type ShippingAddress = {
  location: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export type User = {
  _id: string;
  email: string;
  phone?: string;
  isVerified: boolean;
  shippingAddress?: ShippingAddress;
  isMerchant: boolean;
  hasBeenDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type LoginCredentials = {
  email: string;
  password: string;
  otp?: number;
};

export type LoginReturnData = {
  accessToken: string;
  refreshToken: string;
  otpGenerated?: boolean;
};

export type ForgotPwdConfirmPayload = {
  email: string;
  otp: number;
  password: string;
};
