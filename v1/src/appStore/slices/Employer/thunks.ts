import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  CLOSED,
  EmployerSignupType,
  NewOpportunityFormProps,
  OPEN,
} from "../../../types";
import { PROGRAM_CLIENT, USER_CLIENT } from "../../axiosInstance";

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

export const employerGetPrograms = createAsyncThunk(
  "employer/getPrograms",
  async (_, { rejectWithValue }) => {
    try {
      const res = await PROGRAM_CLIENT.get("/employers/opportunities");
      console.log(res.data);
      return res.data.data.attributes.programs;
    } catch (err: any) {
      console.error("employer get programs error", err);
      rejectWithValue(err.response.data);
    }
  }
);

export const postNewOpportunity = createAsyncThunk(
  "employer/postNewOpportunity",
  async (
    {
      programId,
      formData,
    }: { programId: string; formData: NewOpportunityFormProps },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const res = await PROGRAM_CLIENT.post(
        `/programs/${programId}/opportunities`,
        {
          data: {
            type: "Opportunity",
            attributes: formData,
          },
        }
      );
      dispatch(employerGetPrograms());
      return res.data.data.attributes;
    } catch (err: any) {
      console.error("employer post new opportunity error", err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const patchNewApplicationStatus = createAsyncThunk(
  "employer/changeApplicationStatus",
  async (
    {
      programId,
      opportunityId,
      currentStatus,
    }: { programId: string; opportunityId: string; currentStatus: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await PROGRAM_CLIENT.patch(
        `/programs/${programId}/opportunities/${opportunityId}/status`,
        {
          data: {
            type: "status",
            attributes: { status: currentStatus === OPEN ? CLOSED : OPEN },
          },
        }
      );
      return {
        programId,
        opportunityId,
        status: res.data.data.attirbutes.status,
      };
    } catch (err: any) {
      console.error("programs change application status", err);
      return rejectWithValue(err.response.data);
    }
  }
);
