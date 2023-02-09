import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { USER_CLIENT } from "../../axiosInstance";

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (
    formData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post(`auth/token`, {
        ...formData,
        provider: null,
      });
      return res.data;
    } catch (err: any) {
      console.error("user login error", err);
      return rejectWithValue(err.response.data);
    }
  }
);
