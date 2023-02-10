import { createSlice } from "@reduxjs/toolkit";
import { CandidateType } from "../../../types";
import { candidateSignup, getAllCandidates, getCandidateByID } from "..";

type initialProps = CandidateType & {
  isLoggedIn: boolean;
};

const initialState: {
  loggedInCandidate: initialProps | null;
  allCandidates: CandidateType[];
  currentCandidate: CandidateType | null;
} = {
  loggedInCandidate: null,
  allCandidates: [],
  currentCandidate: null,
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    signout: () => {
      // deliberately left empty
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(candidateSignup.fulfilled, (state, action) => {
        state.loggedInCandidate = {
          ...(action.payload as unknown as CandidateType),
          isLoggedIn: true,
        };
      })
      .addCase(getCandidateByID.fulfilled, (state, action) => {
        state.currentCandidate = action.payload;
      })
      .addCase(getAllCandidates.fulfilled, (state, action) => {
        state.allCandidates = action.payload;
      });
  },
});

export const {} = candidateSlice.actions;

export default candidateSlice.reducer;
