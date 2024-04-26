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
  phone?: number;
  isVerified: boolean;
  shippingAddresses?: ShippingAddress;
  createdAt: Date;
  updatedAt: Date;
};

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
};
