import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const isLoggedin = createSelector(
  [(state: RootState) => !!state.auth.accessToken],
  (user) => user
);

export const getAccessToken = createSelector(
  [(state: RootState) => state.auth.accessToken],
  (user) => user
);

export const getCurrentRole = createSelector(
  [
    (state: RootState) =>
      state.auth.account.roles[state.auth.account.currentRole as number],
  ],
  (user) => user
);
