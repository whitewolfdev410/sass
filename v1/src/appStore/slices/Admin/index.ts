import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { adminGetMemberAccounts, adminLogin, getAdminProfile } from "..";

type AdminProps = {
  email: string;
  firstName: string;
  lastName: string;
  accounts: MemberAccountProps[];
};

type MemberAccountProps = {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  accountId?: string;
};

const initialState: AdminProps = {
  email: "",
  firstName: "",
  lastName: "",
  accounts: [],
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
    builder
      .addCase(adminGetMemberAccounts.fulfilled, (state, action) => {
        return { ...state, ...action.payload };
      })
      .addMatcher(
        isAnyOf(adminLogin.fulfilled, getAdminProfile.fulfilled),
        (state, action) => {
          return {
            ...state,
            ...(action.payload as unknown as AdminProps),
            accounts: [],
          };
        }
      );
  },
});

export const {} = adminSlice.actions;

export default adminSlice.reducer;
