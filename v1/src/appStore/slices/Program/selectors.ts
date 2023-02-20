import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// export const selectLoggedInUser = createSelector([(state: RootState) => state.user], (user) => user);

export const getCurrentProgram = createSelector(
	[(state: RootState) => state?.program.currentProgram],
	(program) => program
);
