import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { adminLogin, getAdminProfile } from "..";
import { AdminSignupType } from "../../../types";

type AdminProps = {
  email: string;
  firstName: string;
  lastName: string;
};

const initialState: AdminProps = {
  email: "",
  firstName: "",
  lastName: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(adminLogin.fulfilled, getAdminProfile.fulfilled),
      (state, action) => {
        return { ...state, ...(action.payload as unknown as AdminProps) };
      }
    );
  },
});

export const {} = adminSlice.actions;

export default adminSlice.reducer;
