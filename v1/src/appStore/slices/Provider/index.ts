import { createSlice } from "@reduxjs/toolkit";
import { getProviderInfo } from "..";
import { ProviderType } from "../../../types";

type ProviderStateProps = {
  provider: ProviderType | null;
  valid: boolean;
};

const initialState: ProviderStateProps = {
  provider: {
    companyName: "",
    providerId: "",
    providerAlias: "",
  },
  valid: false,
};

const providerSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProviderInfo.fulfilled, (state, action) => {
        return {
          provider: action.payload as unknown as ProviderType,
          valid: true,
        };
      })
      .addCase(getProviderInfo.rejected, (state, action) => {
        return { provider: null, valid: false };
      });
  },
});

export const {} = providerSlice.actions;

export default providerSlice.reducer;
