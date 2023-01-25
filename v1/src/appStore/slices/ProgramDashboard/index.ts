export {};
// import { createSlice } from "@reduxjs/toolkit";
// import {
// 	ApplicationFormTemplateType,
// 	NewProgramType,
// 	ProgramDashboardType,
// 	ProgramDetailsType,
// 	ProgramType,
// } from "../../../types";
// import { getProgramProvider, getProgramProviderByID } from "../Provider/thunks";
// import { createProgram, saveNewProgramApplicationTemplate, saveNewProgramDetails } from "./thunks";

// type initialProps = {
// 	allProgrammes: ProgramDashboardType;
// 	newProgram: NewProgramType | null;
// 	newProgramDetails: ProgramDetailsType | null;
// 	newProgramApplicationTemplate: ApplicationFormTemplateType | null;
// };

// const initialState: initialProps = {
// 	allProgrammes: [],
// 	newProgram: null,
// 	newProgramDetails: null,
// 	newProgramApplicationTemplate: null,
// };

// const programProviderSlice = createSlice({
// 	name: "programProvider",
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(getProgramProvider.fulfilled, (state, action) => {
// 				state.allProgrammes = action.payload;
// 			})
// 			.addCase(getProgramProviderByID.fulfilled, (state, action) => {})
// 			.addCase(
// 				saveNewProgramApplicationTemplate.fulfilled,
// 				(state, action) => {}
// 			)
// 			.addCase(saveNewProgramDetails.fulfilled, (state, action) => {})
// 			.addCase(createProgram.fulfilled, (state, action) => {});
// 	},
// });

// export const {} = programProviderSlice.actions;

// export default programProviderSlice.reducer;
