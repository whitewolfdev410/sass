import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectProviderProfile = createSelector(
  [(state: RootState) => state.progamProvider],
  (user) => user
);
