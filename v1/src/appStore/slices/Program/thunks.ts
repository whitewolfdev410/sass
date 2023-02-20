import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
	newProgramType,
	ProgramDetailsType,
	ProgramType,
} from "../../../types";
import { PROGRAM_CLIENT } from "../../axiosInstance";

export const getAllPrograms = createAsyncThunk("program/getAll", async () => {
	try {
		const response = await PROGRAM_CLIENT.get(`Program/`, {
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
export const getProgramById = createAsyncThunk(
	"program/getOne",
	async ({ id }: { id: string }) => {
		try {
			if (id) {
				const response = await PROGRAM_CLIENT.get(`programs/${id}`, {
					headers: {
						accept: "*/*",
					},
				});
				return response.data;
			}
			return {} as newProgramType;
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);

export const postProgram = createAsyncThunk(
	"program/postProgram",
	async ({ data }: { data: ProgramType }) => {
		try {
			const response = await PROGRAM_CLIENT.post(`Program/`, data, {
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
export const updateProgram = createAsyncThunk(
	"programDashboard/saveDetails",
	async (
		data: {
			id: string;
			type: string;
			attributes: ProgramDetailsType;
		},
		{ rejectWithValue }
	) => {
		try {
			const response = await PROGRAM_CLIENT.put(
				`/programs/${data.id}`,
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
			return rejectWithValue(err.response.data);
		}
	}
);

export const deleteProgram = createAsyncThunk(
	"program/deleteProgram",
	async ({ id }: { id: number | string }) => {
		try {
			const response = await PROGRAM_CLIENT.delete(`Program/${id}`, {
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
