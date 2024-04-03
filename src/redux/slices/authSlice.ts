import { createSlice } from "@reduxjs/toolkit";

type Phone = {
  country: {
    code: number;
    name: string;
    shortName: string;
  };
  value: number;
};

type ShippingAddress = {
  street: string;
  city: string;
  country: string;
};

interface User {
  _id: string;
  email: string;
  phone?: Phone;
  isVerified: boolean;
  shippingAddresses?: ShippingAddress[] | [];
  createdAt: Date;
  updatedAt: Date;
}

interface AuthState {
  isAuthenticated: boolean;
  user?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
