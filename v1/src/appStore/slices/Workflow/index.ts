import { createSlice } from "@reduxjs/toolkit";
import { WorkflowType } from "../../../types";
import { createWorkflow, getAllWorkflows } from "./thunks";

const initialState: { allWorkflows: WorkflowType[]; currentWorkflow: WorkflowType | null } = {
	allWorkflows: [],
	currentWorkflow: null,
};

const programSlice = createSlice({
	name: "programProvider",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllWorkflows.fulfilled, (state, action) => {
				state.allWorkflows = action.payload;
			})
			.addCase(createWorkflow.fulfilled, (state, action) => {
				state.currentWorkflow = action.payload;
			});
	},
});

export const {} = programSlice.actions;

export default programSlice.reducer;
