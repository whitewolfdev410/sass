import { createSlice } from "@reduxjs/toolkit";
import { ApplicationFormTemplateType, NewProgramType, ProgramDashboardType, ProgramDetailsType } from "../../../types";
import {
	createProgram,
	saveNewProgramApplicationTemplate,
	saveNewProgramDetails,
	getAllDashboardPrograms,
	getAllDashboardProgramsByLocation,
} from "./thunks";

type initialProps = {
	allProgrammes: ProgramDashboardType;
	newProgram: NewProgramType;
	newProgramDetails: ProgramDetailsType;
	newProgramApplicationTemplate: ApplicationFormTemplateType;
};

const initialState: initialProps = {
	allProgrammes: [],
	newProgram: {} as NewProgramType,
	newProgramDetails: {} as ProgramDetailsType,
	newProgramApplicationTemplate: {} as ApplicationFormTemplateType,
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
			});
	},
});

export const {} = programProviderSlice.actions;

export default programProviderSlice.reducer;
