import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProgramProviderType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const programProviderLogin = createAsyncThunk(
	"programProvider/login",
	async ({ emailID, token }: { emailID: string; token: string }, {}) => {
		try {
			await USER_CLIENT.post(`ProgramProvider/signin?emailID=${emailID}&token=${token}`, {
				headers: {
					accept: "*/*",
				},
			});
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const programProviderSignup = createAsyncThunk(
	"programProvider/signup",
	async (data: ProgramProviderType, {}) => {
		try {
			await USER_CLIENT.post(`ProgramProvider/signup`, data, {
				headers: {
					accept: "*/*",
					"Content-Type": "application/json",
				},
			});
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);

export const getProgramProvider = createAsyncThunk("programProvider/getAll", async () => {
	try {
		let response = await USER_CLIENT.get(`ProgramProvider`, {
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

export const getProgramProviderByID = createAsyncThunk(
	"programProvider/getOne",
	async ({ id }: { id: string | number }) => {
		try {
			let response = await USER_CLIENT.get(`ProgramProvider/${id}`, {
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
