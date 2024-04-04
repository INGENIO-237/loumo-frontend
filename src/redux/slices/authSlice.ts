import server from "@/data/server";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  extraReducers(builder) {
    builder.addCase(getCurrentUser.fulfilled, (state, payload) => {
      state.isAuthenticated = true;
      state.user = payload.payload;
    });
  },
});

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async function (accessToken: string) {
    return server
      .get("/sessions/current", {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((response) => response.data);
  }
);

export default authSlice.reducer;
