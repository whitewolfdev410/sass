import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CandidateType } from "../../../types";
import { PROGRAM_CLIENT, USER_CLIENT } from "../../axiosInstance";

export const candidateLogin = createAsyncThunk(
	"candidate/login",
	async ({ emailID, token }: { emailID: string; token: string }, {}) => {
		try {
			await USER_CLIENT.post(
				`Candidate/signin?emailID=${emailID}&token=${token}`,
				{
					headers: {
						accept: "*/*",
					},
				}
			);
		} catch (err: any) {
			let error: AxiosError<any> = err;
			if (!error.response) {
				console.log(err);
			}
		}
	}
);
export const candidateSignup = createAsyncThunk(
	"candidate/signup",
	async (data: CandidateType, {}) => {
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
	}
);

export const getAllCandidates = createAsyncThunk(
	"candidate/getAll",
	async () => {
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
	}
);

export const getCandidateByID = createAsyncThunk(
	"candidate/getOne",
	async ({ id }: { id: string | number }) => {
		try {
			let response = await USER_CLIENT.get(`Candidate/${id}`, {
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

export const checkCandidateEmail = createAsyncThunk(
	"candidate/checkCandidateEmailExists",
	async ({ emailID }: { emailID: string }) => {
		try {
			let response = await USER_CLIENT.get(
				`Candidate/CheckCandidateEmailExists?emailID=${emailID}`,
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
export const getApplicationStatus = createAsyncThunk(
	"candidate/applicationStatus",
	async ({ candidateId }: { candidateId: string }) => {
		try {
			let response = await PROGRAM_CLIENT.get(
				`/candidates/${candidateId}/applications?candidateId=${candidateId}`,
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
