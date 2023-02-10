import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectProviderInfo = createSelector(
  [(state: RootState) => state.provider.provider],
  (user) => user
);

export const selectIsValidProvider = createSelector(
  [(state: RootState) => state.provider.valid],
  (user) => user
);
