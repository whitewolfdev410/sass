import { createSlice } from "@reduxjs/toolkit";
import {
  authLogin,
  authLogout,
  getFullProviderInfo,
  setRole,
  setCurrentRoleIndexTo,
  verifyEmail,
} from "..";
import { ADMIN, OWNER, ProviderType } from "../../../types";

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
    emailVerified: boolean;
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
    emailVerified: false,
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
        incomingState.account.emailVerified = true;
        return { ...state, ...incomingState };
      })
      .addCase(authLogout.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(setRole.fulfilled, (state, action) => {
        console.log("state", state);
        console.log("action.payload", action.payload);
        const tempState = { ...state.account };
        tempState.currentRole = 0;
        tempState.roles = [{ role: OWNER, persona: action.payload }];
        console.log("tempState", tempState);
        return { ...state, account: { ...tempState } };
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        return { ...state, account: { ...state.account, emailVerified: true } };
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
