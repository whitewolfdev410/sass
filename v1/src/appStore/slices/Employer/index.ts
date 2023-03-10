import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  patchNewApplicationStatus,
  employerGetPrograms,
  employerSignup,
  getEmployerProfile,
} from "..";
import { ProgramProps } from "../../../types";

type EmployerProps = {
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  programs: ProgramProps[];
};

const initialState: EmployerProps = {
  email: "",
  firstName: "",
  lastName: "",
  jobTitle: "",
  phoneNumber: "",
  programs: [],
};

const employerSlice = createSlice({
  name: "employer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(employerGetPrograms.fulfilled, (state, action) => {
        return { ...state, programs: [...action.payload] };
      })
      .addCase(patchNewApplicationStatus.fulfilled, (state, action) => {
        const temp = { ...state };
        const { programId, opportunityId, status } = action.payload;
        const changedProgram =
          temp.programs[
            state.programs.findIndex((program) => program.id === programId)
          ];
        if (changedProgram) {
          changedProgram.opportunities[
            changedProgram.opportunities.findIndex(
              (opportunity) => opportunity.id === opportunityId
            )
          ].status = status;
        }
        return { ...temp };
      })
      .addMatcher(
        isAnyOf(employerSignup.fulfilled, getEmployerProfile.fulfilled),
        (state, action) => {
          return { ...state, ...(action.payload as unknown as EmployerProps) };
        }
      );
  },
});

export const {} = employerSlice.actions;

export default employerSlice.reducer;
