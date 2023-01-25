import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ApplicationFormTemplateType, NewProgramType, ProgramDetailsType, ProgramType } from "../../../types";
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
export const getProgramById = createAsyncThunk("program/getOne", async ({ id }: { id: string }) => {
	try {
		const response = await PROGRAM_CLIENT.get(`Program/${id}`, {
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

export const postProgram = createAsyncThunk("program/postProgram", async ({ data }: { data: ProgramType }) => {
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
});

export const updateProgram = createAsyncThunk("program/updateProgram", async ({ data }: { data: ProgramType }) => {
	try {
		const response = await PROGRAM_CLIENT.put(`Program/${data.programID}`, data, {
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

export const deleteProgram = createAsyncThunk("program/deleteProgram", async ({ id }: { id: number | string }) => {
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
});
