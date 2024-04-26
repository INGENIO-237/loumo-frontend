import server from "@/data/server";
import { User } from "@/types/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
