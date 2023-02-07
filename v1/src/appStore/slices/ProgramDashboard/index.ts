import { createSlice } from "@reduxjs/toolkit";
import {
	ApplicationFormTemplateType,
	CandidateProfileType,
	NewProgramType,
	ProgramDashboardType,
	ProgramDetailsType,
	ProgramSummaryType,
} from "../../../types";
import {
	createProgram,
	saveNewProgramApplicationTemplate,
	saveNewProgramDetails,
	getAllDashboardPrograms,
	getAllDashboardProgramsByLocation,
	getCandidateProfileData,
	getProgramSummary,
} from "./thunks";

type initialProps = {
	programSummary: ProgramSummaryType;
	allProgrammes: ProgramDashboardType;
	newProgram: NewProgramType;
	newProgramDetails: ProgramDetailsType;
	newProgramApplicationTemplate: ApplicationFormTemplateType;
	candidateProfileData: CandidateProfileType;
};

const initialState: initialProps = {
	programSummary: {} as ProgramSummaryType,
	allProgrammes: [],
	newProgram: {} as NewProgramType,
	newProgramDetails: {} as ProgramDetailsType,
	newProgramApplicationTemplate: {} as ApplicationFormTemplateType,
	candidateProfileData: {} as CandidateProfileType,
};

const programProviderSlice = createSlice({
	name: "programProvider",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllDashboardPrograms.fulfilled, (state, action) => {
				state.allProgrammes = action.payload;
			})
			.addCase(getAllDashboardProgramsByLocation.fulfilled, (state, action) => {
				state.allProgrammes = action.payload;
			})
			.addCase(saveNewProgramApplicationTemplate.fulfilled, (state, action) => {
				state.newProgramApplicationTemplate = action.payload;
			})
			.addCase(saveNewProgramDetails.fulfilled, (state, action) => {
				state.newProgramDetails = action.payload;
			})
			.addCase(createProgram.fulfilled, (state, action) => {
				state.newProgram = action.payload;
			})
			.addCase(getCandidateProfileData.fulfilled, (state, action) => {
				state.candidateProfileData = action.payload;
			})
			.addCase(getProgramSummary.fulfilled, (state, action) => {
				state.programSummary = action.payload;
			});
	},
});

export const {} = programProviderSlice.actions;

export default programProviderSlice.reducer;
