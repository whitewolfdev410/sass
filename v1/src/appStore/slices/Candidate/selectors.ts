import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectLoggedInCandidate = createSelector([(state: RootState) => state.progamProvider], (user) => user);
