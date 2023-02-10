import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const getAllAlerts = createSelector(
  [(state: RootState) => state.alert],
  (user) => user
);
