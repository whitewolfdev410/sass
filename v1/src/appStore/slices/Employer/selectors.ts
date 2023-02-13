import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectEmployerProfile = createSelector(
  [(state: RootState) => state.employer],
  (user) => user
);

export const employerSelectPrograms = createSelector(
  [(state: RootState) => state.employer.programs],
  (user) => user
);
