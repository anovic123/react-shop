import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from '../../../utils/constants';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: any, { rejectWithValue }) => {
    try {
      const user = await axios.post(`${BASE_URL}/users`, data);
      return user.data;
    }
    catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: any, { rejectWithValue }) => {
    try {
      const user = await axios.post(`${BASE_URL}/auth/login`, data);
      const login = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${user.data.access_token}`
        }
      })
      localStorage.setItem('token', user.data.access_token);
      return login.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)