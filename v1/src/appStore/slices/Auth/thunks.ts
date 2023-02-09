import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { USER_CLIENT } from "../../axiosInstance";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (formData: { email: string; password: string; provider: string }) => {
    try {
      const res = await USER_CLIENT.post(`auth/token`, formData);
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      console.error("user login error", err);
    }
  }
);

export const getProviderInfo = createAsyncThunk(
  "auth/getProviderInfo",
  async (providerAlias: string, { rejectWithValue }) => {
    try {
      if (providerAlias === "admin") return null;
      const res = await USER_CLIENT.get(`/providers/${providerAlias}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
