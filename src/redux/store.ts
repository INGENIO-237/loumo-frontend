import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userDropdownReducer from "./slices/userDropdownSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userDropdown: userDropdownReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
