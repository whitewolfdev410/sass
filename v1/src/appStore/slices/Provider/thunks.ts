import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ProviderSignupType } from "../../../types";
import { USER_CLIENT } from "../../axiosInstance";

export const programProviderLogin = createAsyncThunk(
  "programProvider/login",
  (formData: { email: string; password: string }) => {
    try {
      const res = USER_CLIENT.post(`auth/token`, formData).then((res) => {
        return res.data;
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
  async (data: ProviderSignupType, {}) => {
    try {
      await USER_CLIENT.post(`providers/signup`, data);
      return "success";
    } catch (err: any) {
      let error: AxiosError<any> = err;
      if (!error.response) {
        console.error("providers signup error", err);
      }
    }
  }
);

export const getProgramProvider = createAsyncThunk(
  "programProvider/getAll",
  async () => {
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
  }
);

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

export const verifyInviteCode = createAsyncThunk(
  "programProvider/verifyInvite",
  async (formData: { email: string; inviteCode: string; provider: string }) => {
    try {
      const res = await USER_CLIENT.post("/providers/verifyinvite", {
        ...formData,
      });
      console.log("verify invite code success", res.data);
      return res.data;
    } catch (err) {
      console.error("verify invite error", err);
    }
  }
);
