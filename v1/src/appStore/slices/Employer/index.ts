import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { employerSignup, getEmployerProfile } from "..";

type EmployerProps = {
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
};

const initialState: EmployerProps = {
  email: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  phoneNumber: "",
};

const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(employerSignup.fulfilled, getEmployerProfile.fulfilled),
      (state, action) => {
        return { ...state, ...(action.payload as unknown as EmployerProps) };
      }
    );
  },
});

export const {} = employerSlice.actions;

export default employerSlice.reducer;
