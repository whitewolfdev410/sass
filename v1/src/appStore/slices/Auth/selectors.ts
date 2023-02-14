import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectIsAuthenticated = createSelector(
  [(state: RootState) => !!state.auth.accessToken],
  (user) => user
);

export const selectIsVerified = createSelector(
  [(state: RootState) => state.auth.account.emailVerified],
  (user) => user
);

export const getAccessToken = createSelector(
  [(state: RootState) => state.auth.accessToken],
  (user) => user
);

export const selectCurrentEmail = createSelector(
  [(state: RootState) => state.auth.account.email],
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

export const selectUserId = createSelector(
  [(state: RootState) => state.auth.account.id],
  (user) => user
);
