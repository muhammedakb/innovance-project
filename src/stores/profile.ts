import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [];

export const getProfileAsync: any = createAsyncThunk(
  "profile/getProfileAsync",
  async () => {
    const { data } = await axios.get("http://localhost:5000/profile");
    return await data;
  }
);

export const profile = createSlice({
  name: "profile",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProfileAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProfileAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getProfileAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default profile.reducer;
