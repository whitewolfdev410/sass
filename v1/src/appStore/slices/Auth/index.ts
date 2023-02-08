import { createSlice } from "@reduxjs/toolkit";
import { authLogin } from "..";

type AuthProps = {
  accessToken: string;
  expiresUtc: string;
  refreshToken: string;
  account: {
    id: string;
    displayName: string;
    email: string;
    provider: string;
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
    provider: "",
    roles: [
      {
        persona: "",
        role: "",
      },
    ],
  },
};

const candidateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      return { ...state, ...(action.payload as unknown as AuthProps) };
    });
  },
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
