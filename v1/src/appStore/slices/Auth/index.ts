import { createSlice } from "@reduxjs/toolkit";
import { authLogin, getProviderInfo } from "..";
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
    roles: [
      {
        persona: string;
        role: string;
      }
    ];
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
    roles: [
      {
        persona: "",
        role: "",
      },
    ],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        return { ...state, ...(action.payload as unknown as AuthProps) };
      })
      .addCase(getProviderInfo.fulfilled, (state, action) => {
        return {
          ...state,
          account: { ...state.account, provider: action.payload },
        };
      })
      .addCase(getProviderInfo.rejected, (state, action) => {
        return {
          ...state,
          account: { ...state.account, provider: null },
        };
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
