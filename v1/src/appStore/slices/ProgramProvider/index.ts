import { createSlice } from "@reduxjs/toolkit";
import { verifyProviderInviteCode } from "..";

type ProgramProviderType = {
  providerId?: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
};

const initialState: ProgramProviderType = {
  providerId: "",
  email: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  phoneNumber: "",
};

const programProviderSlice = createSlice({
  name: "programProvider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyProviderInviteCode.fulfilled, (state, action) => ({
      ...state,
      ...(action.payload as unknown as ProgramProviderType),
    }));
  },
});

export default programProviderSlice.reducer;
