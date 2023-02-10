import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { CandidateType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const candidateSignup = createAsyncThunk(
  "candidate/signup",
  async (
    formData: CandidateType & { password: string },
    { rejectWithValue }
  ) => {
    try {
      await USER_CLIENT.post(`candidates/signup`, formData);
      return "success";
    } catch (err: any) {
      console.error("candidate signup error", err);
      return rejectWithValue(err.response.data);
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
