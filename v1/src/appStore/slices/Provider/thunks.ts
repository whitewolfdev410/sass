import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_ROUTE } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const getProviderInfo = createAsyncThunk(
  "provider/getProviderInfo",
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
