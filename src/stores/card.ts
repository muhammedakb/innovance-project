import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { succ, error } from "../helpers/toast/toast";
const API_URL = "http://localhost:5000/cards";


export const getCardAsync: any = createAsyncThunk(
  "cards/getCardAsync",
  async () => {
    const { data } = await axios.get(API_URL);
    return await data;
  }
);

export const addCardAsync: any = createAsyncThunk(
  "cards/addCardAsync",
  async (data) => {
    const res = await axios.post(API_URL, data);

    return res.data;
  }
);

export const removeCardAsync: any = createAsyncThunk(
  "cards/removeCardAsync",
  async (id) => {
    const res = await axios.delete(`http://localhost:5000/cards/${id}`);
    return res.data;
  }
);

export const card = createSlice({
  name: "card",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // get card
    [getCardAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCardAsync.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getCardAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    // post card
    [addCardAsync.fulfilled]: (state: never | any, action: never | any) => {
      state.items.push(action.payload);
      succ("Kart başarıyla eklendi !");
    },
    [addCardAsync.rejected]: (state: never | any, action: never | any) => {
      error("Kart ekleme başarısız !");
    },
    // remove card
    [removeCardAsync.fullfilled]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default card.reducer;
