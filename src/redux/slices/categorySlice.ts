import server from "@/data/server";
import { Category } from "@/types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type CategoryState = {
  categories: Category[];
};

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCategories.fulfilled, (state, payload) => {
      state.categories = payload.payload;
    });
  },
});

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async function () {
    return server
      .get("/categories")
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
);

export default categorySlice.reducer;
