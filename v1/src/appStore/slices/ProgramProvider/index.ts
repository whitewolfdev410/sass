import { createSlice } from "@reduxjs/toolkit";
import { providerGetMemberAccounts, verifyProviderInviteCode } from "..";

type ProgramProviderType = {
  providerId?: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  accounts: MemberAccountProps[];
};

type MemberAccountProps = {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  accountId?: string;
};

const initialState: ProgramProviderType = {
  providerId: "",
  email: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  phoneNumber: "",
  accounts: [],
};

const programProviderSlice = createSlice({
  name: "programProvider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyProviderInviteCode.fulfilled, (state, action) => ({
      ...state,
      ...(action.payload as unknown as ProgramProviderType),
      accounts: []
    })).addCase(providerGetMemberAccounts.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    })
  },
});

export default programProviderSlice.reducer;
