import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_CLIENT } from "../../axiosInstance";

export const authLogin = createAsyncThunk(
  "auth/login",
  async (formData: { emailID: string; token: string }) => {
    try {
      await USER_CLIENT.post(`auth/token`, formData);
    } catch (err: any) {
      console.error("user login error", err);
    }
  }
);
