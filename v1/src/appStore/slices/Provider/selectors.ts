import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectLoggedInProvider = createSelector([(state: RootState) => state.progamProvider], (user) => user);
