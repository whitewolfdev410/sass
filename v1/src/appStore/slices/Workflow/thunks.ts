import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { WorkflowType } from "../../../types";
import { WORKFLOW_CLIENT } from "../../axiosInstance";

export const getAllWorkflows = createAsyncThunk("workflow/getAll", async () => {
	try {
		const response = await WORKFLOW_CLIENT.get(`Workflow/`, {
			headers: {
				accept: "*/*",
			},
		});
		return response.data;
	} catch (err: any) {
		let error: AxiosError<any> = err;
		if (!error.response) {
			console.log(err);
		}
	}
});

export const createWorkflow = createAsyncThunk("workflow/createWorkflow", async ({ data }: { data: WorkflowType }) => {
	try {
		const response = await WORKFLOW_CLIENT.post(`Workflow/`, data, {
			headers: {
				accept: "*/*",
			},
		});
		return response.data;
	} catch (err: any) {
		let error: AxiosError<any> = err;
		if (!error.response) {
			console.log(err);
		}
	}
});
