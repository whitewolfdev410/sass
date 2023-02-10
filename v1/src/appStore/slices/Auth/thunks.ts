import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ADMIN_ROUTE } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (
    formData: {
      email: string;
      password: string;
      providerId: string | null;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post(`auth/token`, formData);
      console.log(res.data);
      return res.data;
    } catch (err: any) {
      console.error("user login error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getFullProviderInfo = createAsyncThunk(
  "auth/getFullProviderInfo",
  async (providerAlias: string, { rejectWithValue }) => {
    try {
      if (providerAlias === ADMIN_ROUTE) return null;
      const res = await USER_CLIENT.get(`/providers/${providerAlias}`);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const authLogout = createAsyncThunk("auth/logout", () => {
  return "logout";
});

export const setCurrentRoleIndexTo = createAsyncThunk(
  "auth/switchRole",
  (index: number) => index
);
