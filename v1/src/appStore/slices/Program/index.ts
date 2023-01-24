import { createSlice } from "@reduxjs/toolkit";
import { ProgramDashboardType, ProgramType } from "../../../types";
import { deleteProgram, getAllPrograms, getProgramById, postProgram, updateProgram } from "./thunks";

type initialProps = {
	allProgrammes: ProgramDashboardType;
	currentProgram: ProgramType | null;
};

const initialState: initialProps = {
	allProgrammes: [],
	currentProgram: null,
};

const programSlice = createSlice({
	name: "programProvider",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPrograms.fulfilled, (state, action) => {
				state.allProgrammes = action.payload;
			})
			.addCase(getProgramById.fulfilled, (state, action) => {
				state.currentProgram = action.payload;
			})
			.addCase(postProgram.fulfilled, (state, action) => {
				state.currentProgram = action.payload;
			})
			.addCase(updateProgram.fulfilled, (state, action) => {
				state.currentProgram = action.payload;
			})
			.addCase(deleteProgram.fulfilled, (state, action) => {
				state.currentProgram = action.payload;
			});
	},
});

export const {} = programSlice.actions;

export default programSlice.reducer;
