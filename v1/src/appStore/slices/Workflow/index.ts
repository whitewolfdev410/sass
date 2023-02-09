import { createSlice } from "@reduxjs/toolkit";
import { WorkflowType, WorkFlowWholeType } from "../../../types";
import { createWorkflow, getAllWorkflows, getSelectedWorkFlow } from "./thunks";

type initialProps = {
	selectedWorkFlow: WorkFlowWholeType;
	allWorkflows: WorkflowType[];
	currentWorkflow: WorkflowType | null;
};
const initialState: initialProps = {
	allWorkflows: [],
	currentWorkflow: null,
	selectedWorkFlow: {} as WorkFlowWholeType,
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
			.addCase(getSelectedWorkFlow.fulfilled, (state, action) => {
				state.selectedWorkFlow = action.payload;
			})
			.addCase(createWorkflow.fulfilled, (state, action) => {
				state.currentWorkflow = action.payload;
			});
	},
});

export const {} = programSlice.actions;

export default programSlice.reducer;
