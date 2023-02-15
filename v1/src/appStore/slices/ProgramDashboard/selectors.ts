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
export const allProgramSummary = createSelector(
	[(state: RootState) => state?.programDashboard.programSummary],
	(programs) => programs
);
export const programPreviewData = createSelector(
	[(state: RootState) => state?.programDashboard.programPreviewData],
	(programs) => programs
);
export const ProviderFilterCandidateData = createSelector(
	[(state: RootState) => state?.programDashboard.ProviderFilterCandidateData],
	(programs) => programs
);
