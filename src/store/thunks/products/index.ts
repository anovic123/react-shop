import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IProducts } from "../../../common/types/products";

import { BASE_URL } from "../../../utils/constants";

export const getProductsData = createAsyncThunk(
  'products/data',
  async(_, { rejectWithValue }) => {
    try {
      const res = await axios.get<IProducts[]>(`${BASE_URL}/products?limit=50&offset=10`)
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }

    }
  }
)

export const getSingleProductData = createAsyncThunk(
  'products/single_product',
  async(id: any, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/products/${id}`);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)