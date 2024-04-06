import { createSlice } from "@reduxjs/toolkit";

interface DropdownState {
  show: boolean;
}

const initialState: DropdownState = {
  show: false,
};

const userDropdown = createSlice({
  name: "userDropdown",
  initialState,
  reducers: {
    toggleUserMenu: (state, payload) => {
      state.show = payload ? payload.payload : !state.show;
    },
  },
});

export const { toggleUserMenu } = userDropdown.actions;

export default userDropdown.reducer;
