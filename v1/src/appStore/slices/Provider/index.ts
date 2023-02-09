import { createSlice } from "@reduxjs/toolkit";
import { ProgramProviderType } from "../../../types";
import {
  programProviderLogin,
  programProviderSignup,
  verifyInviteCode,
} from "..";

type initialProps = ProgramProviderType & {
  isLoggedIn: boolean;
};

const initialState: initialProps = {
  programProviderID: 0,
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  phoneNumber: "",
  userToken: "",
  isLoggedIn: false,
};

const programProviderSlice = createSlice({
  name: "programProvider",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyInviteCode.fulfilled, (state, action) => ({
      ...state,
      ...(action.payload as unknown as ProgramProviderType),
    }));
  },
});

export const { signout } = programProviderSlice.actions;

export default programProviderSlice.reducer;
