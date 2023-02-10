import { createSlice } from "@reduxjs/toolkit";
import {
  authLogin,
  authLogout,
  getFullProviderInfo,
  setCurrentRoleIndexTo,
} from "..";
import { ProviderType } from "../../../types";

type AuthProps = {
  accessToken: string;
  expiresUtc: string;
  refreshToken: string;
  account: {
    id: string;
    displayName: string;
    email: string;
    provider: null | ProviderType;
    currentRole?: number;
    roles: {
      persona: string;
      role: string;
    }[];
  };
};

const initialState: AuthProps = {
  accessToken: "",
  expiresUtc: "",
  refreshToken: "",
  account: {
    id: "",
    displayName: "",
    email: "",
    provider: null,
    currentRole: 0,
    roles: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        let incomingState: AuthProps = action.payload as unknown as AuthProps;
        incomingState.account.currentRole = 0;
        return { ...state, ...incomingState };
      })
      .addCase(authLogout.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(getFullProviderInfo.fulfilled, (state, action) => {
        return {
          ...state,
          account: { ...state.account, provider: action.payload },
        };
      })
      .addCase(getFullProviderInfo.rejected, (state, action) => {
        return {
          ...state,
          account: { ...state.account, provider: null },
        };
      })
      .addCase(setCurrentRoleIndexTo.fulfilled, (state, action) => {
        return {
          ...state,
          account: {
            ...state.account,
            currentRole: action.payload,
          },
        };
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
