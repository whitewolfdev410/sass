import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectAllDashboardPrograms = createSelector(
	[(state: RootState) => state?.programDashboard.allProgrammes],
	(programs) => programs
);
export const selectNewDashboardPrograms = createSelector(
	[(state: RootState) => state?.programDashboard.newProgram],
	(programs) => programs
);
export const selectDashboardProgramDetails = createSelector(
	[(state: RootState) => state?.programDashboard.newProgramDetails],
	(programs) => programs
);
export const selectDashboardApplicationTemplate = createSelector(
	[(state: RootState) => state?.programDashboard.newProgramApplicationTemplate],
	(programs) => programs
);
export const selectCandidateProfileData = createSelector(
	[(state: RootState) => state?.programDashboard.candidateProfileData],
	(programs) => programs
);
