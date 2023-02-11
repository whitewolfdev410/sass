import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { EmployerSignupType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const employerSignup = createAsyncThunk(
  "employer/signup",
  async (data: EmployerSignupType, { rejectWithValue }) => {
    try {
      await USER_CLIENT.post(`employers/signup`, data);
      return "success";
    } catch (err: any) {
      let error: AxiosError<any> = err;
      if (!error.response) {
        console.error("employer signup error", err);
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const verifyEmployerInviteCode = createAsyncThunk(
  "employer/verifyInvite",
  async (
    formData: {
      email: string;
      invitationCode: string;
      providerId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post("/employer/verifyinvite", formData);
      console.log("verify employer invite code success", res.data);
      return res.data;
    } catch (err: any) {
      console.error("verify employer invite error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getEmployerProfile = createAsyncThunk(
  "employer/getProfile",
  async (
    data: { providerId: string; persona: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await USER_CLIENT.post("/employers/profile", data);
      return res.data;
    } catch (err: any) {
      console.error("get provider profile error", err);
      rejectWithValue(err.response.data);
    }
  }
);
