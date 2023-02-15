import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectAdminMemberAccounts = createSelector(
  [(state: RootState) => state.admin.accounts],
  (user) => user
);
