import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CandidateType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const candidateLogin = createAsyncThunk(
	"candidate/login",
	async ({ emailID, token }: { emailID: string; token: string }, {}) => {
		try {
			await USER_CLIENT.post(`Candidate/signin?emailID=${emailID}&token=${token}`, {
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
export const candidateSignup = createAsyncThunk("candidate/signup", async (data: CandidateType, {}) => {
	try {
		await USER_CLIENT.post(`Candidate/signup`, data, {
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
});

export const getcandidate = createAsyncThunk("candidate/getAll", async () => {
	try {
		let response = await USER_CLIENT.get(`Candidate`, {
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

export const getcandidateByID = createAsyncThunk("candidate/getOne", async ({ id }: { id: string | number }) => {
	try {
		let response = await USER_CLIENT.get(`Candidate${id}`, {
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
