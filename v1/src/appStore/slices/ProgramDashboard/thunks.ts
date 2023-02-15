import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
	ApplicationFormTemplateType,
	CandidateProfileType,
	NewProgramType,
	ProgramDetailsType,
	ProviderFilterCandidateDataType,
} from "../../../types";
import { PROGRAM_CLIENT } from "../../axiosInstance";

export const getAllDashboardPrograms = createAsyncThunk(
	"programDashboard/getAllPrograms",
	async () => {
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
	}
);
export const getProgramSummary = createAsyncThunk(
	"programDashboard/getProgramSummary",
	async () => {
		try {
			const response = await PROGRAM_CLIENT.get(`/programs`, {
				headers: {
					"Content-Type": "application/json",
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
export const getAllDashboardProgramsByLocation = createAsyncThunk(
	"programDashboard/getAllProgramsByLocation",
	async ({ location }: { location: string }) => {
		try {
			const response = await PROGRAM_CLIENT.get(
				`ProgramDashboard/${location}`,
				{
					headers: {
						accept: "*/*",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);

// export const getApplicationTemplate = createAsyncThunk(
// 	"programDashboard/GetApplicationTemplate",
// 	async ({ programID }: { programID: string }) => {
// 		try {
// 			const response = await PROGRAM_CLIENT.get(
// 				`ProgramDashboard/GetApplicationTemplate?programID=${programID}`,
// 				{
// 					headers: {
// 						accept: "*/*",
// 					},
// 				}
// 			);
// 			return response.data;
// 		} catch (err: any) {
// 			let error: AxiosError<any> = err;
// 			if (!error.response) {
// 				console.log(err);
// 			}
// 		}
// 	}
// );
export const getCandidateProfileData = createAsyncThunk(
	"programDashboard/getCandidateProfileData",
	async ({
		applicationId,
		programId,
	}: {
		applicationId: string;
		programId: string;
	}) => {
		try {
			const response = await PROGRAM_CLIENT.get(
				`programs/${programId}/candidate-applications/${applicationId}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const updateCandidateApplication = createAsyncThunk(
	"programDashboard/updateCandidateApplication",
	async ({
		data,
		programId,
	}: {
		data: CandidateProfileType;
		programId: string;
	}) => {
		try {
			const response = await PROGRAM_CLIENT.put(
				`programs/${programId}/candidate-applications/${data?.data?.id}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
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
	async (data: { type: string; attributes: ProgramDetailsType }) => {
		try {
			const response = await PROGRAM_CLIENT.post(
				`/programs`,
				{
					data: {
						...data,
						attributes: {
							...data.attributes,
							maxApplication: parseInt(
								data.attributes.maxApplication.toString()
							),
						},
					},
				},
				{
					headers: {
						"content-type": "application/json",
					},
					params: {
						version: "1.0",
					},
				}
			);
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
	async (data: {
		id: string;
		type: string;
		attributes: ApplicationFormTemplateType;
	}) => {
		try {
			// data.programGUID = programId;
			const response = await PROGRAM_CLIENT.put(
				`programs/${data.id}/application-form`,
				{ data },
				{
					headers: {
						"Content-Type": "application/json",
					},
					params: {
						programId: data.id,
						version: "1.0",
					},
				}
			);
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
	async ({
		data,
		programId,
	}: {
		data: { type: string; attributes: any };
		programId: string;
	}) => {
		try {
			const response = await PROGRAM_CLIENT.post(
				`programs/${programId}/candidate-applications?programId=${programId}`,
				{ data },
				{
					headers: {
						accept: "*/*",
					},
				}
			);
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
			const response = await PROGRAM_CLIENT.post(
				`ProgramDashboard/CreateProgram`,
				data,
				{
					headers: {
						accept: "*/*",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const getProgramPreview = createAsyncThunk(
	"programDashboard/getProgramPreview",
	async ({ id }: { id: string }) => {
		try {
			const response = await PROGRAM_CLIENT.get(
				`/programs/${id}/preview?programId=${id}`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const publishProgram = createAsyncThunk(
	"programDashboard/publishProgram",
	async ({
		data,
	}: {
		data: { id: string; type: string; attributes: { status: string } };
	}) => {
		try {
			const response = await PROGRAM_CLIENT.patch(
				`/programs/${data.id}/status`,
				{ data },
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const getProviderFilterCandidateData = createAsyncThunk(
	"programDashboard/getProviderFilterCandidateData",
	async ({
		programId,
		stageId,
		status,
		attributes,
	}: {
		programId: string;
		stageId: string;
		status: string;
		attributes: ProviderFilterCandidateDataType;
	}) => {
		try {
			const response = await PROGRAM_CLIENT.post(
				`/programs/${programId}/stages/${stageId}/candidates/${status}?programId=${programId}&stageId=${stageId}&status=${status}`,
				{
					data: {
						id: programId,
						type: "filterRequest",
						attributes: attributes,
					},
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			return response.data;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
