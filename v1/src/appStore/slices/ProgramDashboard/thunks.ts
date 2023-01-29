import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ApplicationFormTemplateType, NewProgramType, ProgramDetailsType } from "../../../types";
import { PROGRAM_CLIENT } from "../../axiosInstance";

export const getAllDashboardPrograms = createAsyncThunk("programDashboard/getAllPrograms", async () => {
	try {
		const response = await PROGRAM_CLIENT.get(`ProgramDashboard`, {
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
export const getAllDashboardProgramsByLocation = createAsyncThunk(
	"programDashboard/getAllProgramsByLocation",
	async ({ location }: { location: string }) => {
		try {
			const response = await PROGRAM_CLIENT.get(`ProgramDashboard/${location}`, {
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
	}
);

export const getApplicationTemplate = createAsyncThunk(
	"programDashboard/GetApplicationTemplate",
	async ({ programID }: { programID: string }) => {
		try {
			const response = await PROGRAM_CLIENT.get(`ProgramDashboard/GetApplicationTemplate?programID=${programID}`, {
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
	}
);

export const saveNewProgramDetails = createAsyncThunk(
	"programDashboard/saveDetails",
	async ({ data }: { data: ProgramDetailsType }) => {
		try {
			const response = await PROGRAM_CLIENT.post(`ProgramDashboard/SaveProgramDetails`, data, {
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
	}
);
export const saveNewProgramApplicationTemplate = createAsyncThunk(
	"programDashboard/saveAppTemplate",
	async ({ data, programId }: { data: ApplicationFormTemplateType, programId: string }) => {
		try {
			data.programGUID = programId
			const response = await PROGRAM_CLIENT.post(`ProgramDashboard/SaveApplicationFormTemplate`, data, {
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
	}
);

export const SaveCandidateApplicationForm = createAsyncThunk(
	"programDashboard/SaveCandidateApplication",
	async ({ data }: { data: any }) => {
		try {
			const response = await PROGRAM_CLIENT.post(`ProgramDashboard/SaveCandidateApplicationForm`, data, {
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
	}
);

export const createProgram = createAsyncThunk(
	"programDashboard/createProgram",
	async ({ data }: { data: NewProgramType }) => {
		try {
			const response = await PROGRAM_CLIENT.post(`ProgramDashboard/CreateProgram`, data, {
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
	}
);
