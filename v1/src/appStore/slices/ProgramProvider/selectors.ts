import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectProgramProviderProfile = createSelector(
  [(state: RootState) => state.programProvider],
  (user) => user
);

export const selectProviderMemberAccounts = createSelector(
  [(state: RootState) => state.programProvider.accounts],
  (user) => user
);
