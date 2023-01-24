import { createSlice } from "@reduxjs/toolkit";
import { ApplicationFormTemplateType, ProgramDashboardType, ProgramDetailsType, ProgramType } from "../../../types";

type initialProps = {
	allProgrammes: ProgramDashboardType;
	newProgramDetails: ProgramDetailsType | null;
	newProgramApplicationTemplate: ApplicationFormTemplateType | null;
};

const initialState: initialProps = {
	allProgrammes: [],
	newProgramDetails: null,
	newProgramApplicationTemplate: null,
};

const programProviderSlice = createSlice({
	name: "programProvider",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder;
		// .addCase(programProviderLogin.fulfilled, (state) => {})
		// .addCase(programProviderSignup.fulfilled, (state) => {});
	},
});

export const {} = programProviderSlice.actions;

export default programProviderSlice.reducer;
