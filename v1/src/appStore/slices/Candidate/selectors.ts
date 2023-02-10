import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// export const selectLoggedInUser = createSelector([(state: RootState) => state.user], (user) => user);

export const getApplicationStatusData = createSelector(
	[(state: RootState) => state?.candidate.applicationStatus],
	(candidate) => candidate
);
