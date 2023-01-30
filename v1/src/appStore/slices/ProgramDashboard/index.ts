import { createSlice } from "@reduxjs/toolkit";
import {
	ApplicationFormTemplateType,
	CandidateProfileType,
	NewProgramType,
	ProgramDashboardType,
	ProgramDetailsType,
} from "../../../types";
import {
	createProgram,
	saveNewProgramApplicationTemplate,
	saveNewProgramDetails,
	getAllDashboardPrograms,
	getAllDashboardProgramsByLocation,
	getCandidateProfileData,
} from "./thunks";

type initialProps = {
	allProgrammes: ProgramDashboardType;
	newProgram: NewProgramType;
	newProgramDetails: ProgramDetailsType;
	newProgramApplicationTemplate: ApplicationFormTemplateType;
	candidateProfileData: CandidateProfileType;
};

const initialState: initialProps = {
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
			});
	},
});

export const {} = programProviderSlice.actions;

export default programProviderSlice.reducer;
