import { createSelector } from "@reduxjs/toolkit";
import { ProviderType } from "../../../types";
import { RootState } from "../../store";

export const isLoggedin = createSelector(
  [(state: RootState) => !!state.auth.accessToken],
  (user) => user
);

export const getAccessToken = createSelector(
  [(state: RootState) => state.auth.accessToken],
  (user) => user
);

export const selectCurrentRole = createSelector(
  [
    (state: RootState) =>
      state.auth.account.roles[state.auth.account.currentRole as number],
  ],
  (user) => user
);

export const selectCurrentRoleIndex = createSelector(
  [(state: RootState) => state.auth.account.currentRole as number],
  (user) => user
);

export const selectRoles = createSelector(
  [(state: RootState) => [...state.auth.account.roles]],
  (user) => user
);

export const selectFullProviderInfo = createSelector(
  [
    (state: RootState) =>
      state.auth.account.provider ? { ...state.auth.account.provider } : null,
  ],
  (user) => user
);

export const selectUserDisplayName = createSelector(
  [(state: RootState) => state.auth.account.displayName],
  (user) => user
);
