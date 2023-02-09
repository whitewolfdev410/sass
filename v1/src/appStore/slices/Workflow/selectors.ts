import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectedWorkFlowData = createSelector(
	[(state: RootState) => state?.workflow.selectedWorkFlow],
	(workflow) => workflow
);
