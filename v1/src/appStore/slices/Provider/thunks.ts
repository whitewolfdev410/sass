import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADMIN_ROUTE } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";
import { refreshAccessToken } from "../Auth/thunks";

export const getProviderInfo = createAsyncThunk(
  "provider/getProviderInfo",
  async (providerAlias: string, { rejectWithValue, dispatch }) => {
    try {
      if (providerAlias === ADMIN_ROUTE) return null;
      const res = await USER_CLIENT.get(`/providers/${providerAlias}`);
      return res.data;
    } catch (err: any) {
      if (err.response.status === 401) {
        dispatch(refreshAccessToken());
      }
      console.error("provider get provider info error", err);
      return rejectWithValue(err.response.data);
    }
  }
);
